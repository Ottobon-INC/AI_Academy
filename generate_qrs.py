import os
import qrcode

# The base URL of your assessment page (Using your local IP for mobile testing)
BASE_URL = "http://192.168.1.7:5174/?campaign="

# List of campaigns you want to generate QR codes for
campaigns = [
    "INSTA_REEL_01",
    "INSTA_STORY_01",
    "LINKEDIN_POST_01",
    "WORKSHOP_HYD"
]

# Create output directory
output_dir = "campaign_qrs"
os.makedirs(output_dir, exist_ok=True)

print(f"Generating QR codes in /{output_dir}...")

for campaign_id in campaigns:
    url = BASE_URL + campaign_id
    
    # Generate QR code
    qr = qrcode.QRCode(version=1, box_size=10, border=4)
    qr.add_data(url)
    qr.make(fit=True)
    
    img = qr.make_image(fill_color="black", back_color="white")
    
    # Save the image
    file_path = os.path.join(output_dir, f"{campaign_id}.png")
    img.save(file_path)
    print(f"Successfully generated: {file_path}")

print("Done! You can now copy these images into your marketing materials.")
