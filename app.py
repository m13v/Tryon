import gradio as gr
from gradio_client import Client
import os
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


custom_css = """
body, html {
    height: 100%;
    margin: 0;
}

.bg-video {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: -1;
}

.content {
    position: relative;
    z-index: 1;
    /* Your content styling */
}

/* Style for the h1 title */
h1 {
    font-size: 1.875rem; /* Equivalent to text-3xl */
    font-weight: bold; /* Equivalent to font-bold */
    letter-spacing: -0.05em; /* Equivalent to tracking-tighter */
    text-align: center;
}

/* Responsive font sizes */
@media (min-width: 640px) { /* sm breakpoint */
    h1 { font-size: 2.25rem; } /* sm:text-4xl */
}

@media (min-width: 768px) { /* md breakpoint */
    h1 { font-size: 3rem; } /* md:text-5xl */
}

@media (min-width: 1024px) { /* lg breakpoint */
    h1 { font-size: 3.75rem; } /* lg:text-6xl */
}

@media (min-width: 1280px) { /* xl breakpoint */
    /* Add any xl specific styles here */
}

.column-title {
    font-size: 0.9375rem; /* Half of 1.875rem */
    font-weight: bold;
    letter-spacing: -0.025em; /* Half of -0.05em */
    text-align: left;
    margin-bottom: 10px; /* Spacing below the title */
}

/* Responsive font sizes for column titles */
@media (min-width: 640px) {
    .column-title { font-size: 1.125rem; } /* Half of sm:text-4xl */
}

@media (min-width: 768px) {
    .column-title { font-size: 1.5rem; } /* Half of md:text-5xl */
}

@media (min-width: 1024px) {
    .column-title { font-size: 1.875rem; } /* Half of lg:text-6xl */
}

/* Adjust as needed for xl breakpoint */
@media (min-width: 1280px) {
    /* Add any xl specific styles for column titles here */
}

.output-image, .input-image, .image-preview {height: 400px !important;}
/* Additional custom CSS to hide the footer */
footer { visibility: hidden; }
/* Your other styles */
"""

with gr.Blocks(css=custom_css) as demo:
    gr.HTML("""
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Put Clothes on Models
        </h1>
    """)
    with gr.Row():
        with gr.Column():
           gr.HTML('<div class="column-title">1. Choose clothes (select "Example" or upload any .jpg or .png image)</div>')
           with gr.Row():
                top_garment_examples = ['top5.png', 'top222.jpeg', 'top333.png', 'dress1.png', 'dress2.png']
                garment_top = gr.Image(sources='upload', type="filepath", label="top garment")
                example_top = gr.Examples(inputs=garment_top, examples_per_page=10, examples=[os.path.join('images', f) for f in top_garment_examples])

                garment_down = gr.Image(sources='upload', type="filepath", label="lower garment")
                bottom_garment_examples = ['bottom1.png', 'bottom2.PNG', 'bottom3.jpeg', 'bottom4.PNG', 'bottom5.png']
                example_down = gr.Examples(inputs=garment_down, examples_per_page=10, examples=[os.path.join('images', f) for f in bottom_garment_examples])

        with gr.Column():
            gr.HTML('<div class="column-title">2. Select model (right now you can only choose one from the list)</div>')
            with gr.Row():
                model = "images/Rouyan_1.png"
                init_image = gr.Image(sources='clipboard', type="filepath", label="model", value=None)
                model_examples = [
                    'Simon_0.png', 'Simon_1.png', 'Xuanxuan_0.png', 'Xuanxuan_1.png', 'Xuanxuan_2.png',
                    'Yaqi_0.png', 'Yaqi_1.png', 'Yifeng_0.png', 'Yifeng_1.png', 'Yifeng_2.png', 'Yifeng_3.png',
                    'Eva_0.png', 'Eva_1.png', 'Rouyan_0.png', 'Rouyan_1.png'
                ]
                example = gr.Examples(inputs=init_image, examples_per_page=40, examples=[os.path.join('images', f) for f in model_examples])
            
        with gr.Column():
            gr.HTML('<div class="column-title">3. Generate (it might take some time; if it fails, try refreshing)</div>')
            run_button = gr.Button(value="Generate", elem_id="generate-btn")
            gallery = gr.Image()
            run_button.click(
                fn=get_tryon_result, 
                inputs=[init_image, garment_top, garment_down], 
                outputs=[gallery],
                concurrency_limit=2
            )

if __name__ == "__main__":
    demo.launch(show_api=False, share=True)