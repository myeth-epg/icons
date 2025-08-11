import os
import json

# Path to your icons folder
icons_folder = "icons"

# List all PNG files
icon_files = [f for f in os.listdir(icons_folder) if f.endswith(".png")]

# Save to icons.json
with open("icons.json", "w") as json_file:
    json.dump(icon_files, json_file, indent=2)

print(f"{len(icon_files)} icons saved to icons.json")
