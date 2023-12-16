import sys
print("Python executable:", sys.executable)
import os
import gradio as gr
from gradio_client import Client
import tempfile
import shutil

# Initialize the API client
api_client = Client("https://humanaigc-outfitanyone.hf.space/--replicas/mms7m/")

# Helper function to save an uploaded image to a temporary file
from PIL import Image
import numpy as np
import io

def save_image_to_temp_file(img):
    if img is None:
        return None
    img = Image.fromarray(np.uint8(img)).convert('RGB')
    with tempfile.NamedTemporaryFile(delete=False, suffix=".png") as tmp_file:
        img.save(tmp_file, format="PNG")
        return tmp_file.name


# Function to get try-on result
import time

def get_tryon_result(model_img, top_garment, lower_garment):
    model_img_path = save_image_to_temp_file(model_img)
    top_garment_path = save_image_to_temp_file(top_garment)
    lower_garment_path = save_image_to_temp_file(lower_garment) if lower_garment is not None else None

    try:
        # Submit the job
        job = api_client.submit([model_img_path, top_garment_path, lower_garment_path], api_name="/get_tryon_result")
        print("Job submitted:", job)

        # Retrieve the result of the job. This is a blocking call.
        result = job.result()
        print("Job result:", result)

        return result
    except Exception as e:
        print("Error during API call:", e)
        raise
    finally:
        # Cleanup temporary files
        if model_img_path:
            os.remove(model_img_path)
        if top_garment_path:
            os.remove(top_garment_path)
        if lower_garment_path:
            os.remove(lower_garment_path)



# Gradio interface setup
with gr.Blocks() as demo:
    with gr.Row():
        with gr.Column():
            model_img = gr.Image(label="Model Image")
            top_garment = gr.Image(label="Top Garment")
            bottom_garment = gr.Image(label="Lower Garment")
            run_button = gr.Button("Try On")

        with gr.Column():
            output_img = gr.Image(label="Try-on Result")

    run_button.click(fn=get_tryon_result, inputs=[model_img, top_garment, bottom_garment], outputs=output_img)

if __name__ == "__main__":
    demo.launch()