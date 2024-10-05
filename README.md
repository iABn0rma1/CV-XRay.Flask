# CV Extractor

CV Extractor is a web application that allows users to upload CV files (in `.doc`, `.docx`, and `.pdf` formats), and extracts contact information (emails and phone numbers) from them.
Live demo [here](https://cv-xray.onrender.com)
<a href="https://cv-xray.onrender.com">
<img width="790" alt="image" src="https://github.com/user-attachments/assets/ca71a2d5-72b1-45e4-9e6c-efe84d9144f2">
</a>

## Tech Stack

- **Frontend**: HTML, CSS
- **Backend**: Python, Flask, OpenPyXL, docx2txt, PyPDF2

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/iABn0rma1/CV-XRay.Flask
   ```
   ```bash
   cd cv-xray.flask
   ```

2. **Create a virtual environment:**
   ```bash
   python3 -m venv myvenv
   source myvenv/bin/activate  # On Windows use `myvenv\Scripts\activate`
   ```

3. **Install the required dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Flask application:**
   ```bash
   python app.py
   ```

5. **Open your browser and go to:**
   ```
   http://127.0.0.1:5000/
   ```

## File Structure

```
CV-XRAY.FLASK/
│
├── app.py                 # Flask backend application
├── requirements.txt       # List of Python dependencies
├── templates/
│   └── index.html         # HTML template of the app
└── README.md              # This README file
```

## Contributing

Contributions are welcome! Please fork this repository, make your changes, and submit a pull request.

1. Fork the Project

2. Create your Feature Branch
```bash
git checkout -b feature/AmazingFeature
```

3. Commit your Changes
```bash
git commit -m 'Added: AmazingFeature'
```

4. Push to the Branch
```bash
git push origin feature/AmazingFeature
```

5. Open a Pull Request

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.
