import gradio as gr
from gradio_client import Client

# Initialize the Gradio client
client = Client("https://humanaigc-outfitanyone.hf.space/--replicas/mms7m/")

def load_example(index):
    try:
        response = client.predict(index, api_name="/load_example")
        print("API Response:", response)
        return response
    except Exception as e:
        print(f"API call failed: {e}")
        return None
        # You may also want to log the complete traceback here
# Function to load example images
# def load_example(index):
#     model_result = client.predict(index, api_name="/load_example")
#     top_garment_result = client.predict(index, api_name="/load_example_1")
#     lower_garment_result = client.predict(index, api_name="/load_example_2")
#     return model_result, top_garment_result, lower_garment_result

# Function to get try-on result
def get_tryon_result(model_img_url, top_garment_url, lower_garment_url):
    tryon_result = client.predict([model_img_url, top_garment_url, lower_garment_url], api_name="/get_tryon_result")
    return tryon_result

# Gradio interface
with gr.Blocks() as app:
    with gr.Row():
        with gr.Column():
            example_index = gr.Number(label="Example Index", value=0)
            load_button = gr.Button("Load Example")
            model_img = gr.Image(label="Model Image")
            top_garment = gr.Image(label="Top Garment")
            lower_garment = gr.Image(label="Lower Garment")
        with gr.Column():
            run_button = gr.Button("Try On")
            output_img = gr.Image(label="Try-on Result")

    load_button.click(fn=load_example, inputs=example_index, outputs=model_img)
   #load_button.click(load_example, inputs=example_index, outputs=[model_img, top_garment, lower_garment])
    run_button.click(get_tryon_result, inputs=[model_img, top_garment, lower_garment], outputs=output_img)

if __name__ == "__main__":
    app.launch()