import gradio as gr
from gradio_client import Client
import httpx
import traceback
# Initialize the Gradio client
client = Client(src="https://humanaigc-outfitanyone.hf.space/--replicas/mms7m/")

def load_example(index):
    try:
        response = client.predict(index, api_name="/load_example")
        print("API Response:", response)
        return response
    except Exception as e:
        print(f"API call failed: {e}")
        return "Error: " + str(e)
def get_tryon_result(model_img_path, top_garment_path, lower_garment_path):
    try:
        if lower_garment_path is None:
            lower_garment_path = ''  # Handle optional lower garment
        tryon_result = client.predict(
            model_img_path, 
            top_garment_path, 
            lower_garment_path, 
            api_name="/get_tryon_result"
        )
        return tryon_result
    except Exception as e:
        print(f"API call failed: {e}")
        return None



with gr.Blocks() as app:
    with gr.Row():
        with gr.Column():
            model_img = gr.Image(label="Model Image", type="filepath")
            top_garment = gr.Image(label="Top Garment", type="filepath")
            lower_garment = gr.Image(label="Lower Garment", type="filepath")
            run_button = gr.Button("Try On")
            output_img = gr.Image(label="Try-on Result")

        # Ensure the following lines are indented correctly
        run_button.click(get_tryon_result, inputs=[model_img, top_garment, lower_garment], outputs=output_img)

if __name__ == "__main__":
    app.launch()