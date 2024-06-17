# Simple Camera App

This React Native project implements a simple camera application that allows users to capture an image of food, overlay the app's logo, add a hardcoded macro description, and save the modified image to the device's storage.

## Requirements

1. **Camera Functionality:**
   - Implement the camera functionality to capture an image.

2. **Add Logo and Macro Description:**
   - Overlay a logo of the app on the captured image.
   - Add a hardcoded macro description of the food (e.g., "Protein: 10g, Carbs: 20g, Fat: 5g").
   - Ensure the position of the logo and macro description on the image is visually appropriate.

3. **Save Image to Device Storage:**
   - Save the modified image (with the logo and macro description) to the device storage.

4. **UI/UX:**
   - Provide a simple and clean UI for capturing the image and displaying the result.
   - Include basic navigation if needed.

## How to Run the Project

Follow these steps to run the Simple Camera App on your local machine or device:

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/simple-camera-app.git
cd simple-camera-app
```

2. Install dependencies using Yarn:
```bash
yarn install
```

3. Start the Expo development server:
```bash
yarn start
```
---

## Implementation Details

### Overlay and Storage Functionality

- **Overlay Implementation:**
   - Uses `expo-image-manipulator` to overlay the app’s logo and add a hardcoded macro description to the captured image. Positioning is adjusted based on the image dimensions for visual clarity.

- **Storage Functionality:**
   - Utilizes `expo-file-system` to save the processed image to the device's local storage. Handles any errors that may occur during the saving process to ensure data integrity.

---
