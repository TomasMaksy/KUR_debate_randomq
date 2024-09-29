A simple web application that facilitates a live debate format where guests randomly draw names to ask questions.

## Features

- Random name selection for debate guests
- Easy-to-use interface
- Dynamic layout based on the number of guests

## Prerequisites

Make sure you have Python installed on your machine. You can download it from [python.org](https://www.python.org/downloads/).

## Installation

1. **Clone the repository:**

   Open your terminal and run the following command to clone the repository:

   \`\`\`bash
   git clone https://github.com/TomasMaksy/KUR_debate_randomq.git
   \`\`\`

2. **Navigate to the project directory:**

   \`\`\`bash
   cd KUR_debate_randomq
   \`\`\`

3. **Set up a virtual environment (optional but recommended):**

   \`\`\`bash
   python -m venv venv
   \`\`\`

   Activate the virtual environment:

   - On Windows:

     \`\`\`bash
     .\\venv\\Scripts\\activate
     \`\`\`

   - On macOS/Linux:

     \`\`\`bash
     source venv/bin/activate
     \`\`\`

4. **Install the required packages:**

   Ensure you have all the necessary packages installed. If you have a \`requirements.txt\` file, run:

   \`\`\`bash
   pip install -r requirements.txt
   \`\`\`

## Configuration

To change the names of the guests, open the \`guest_names.py\` file and modify the list of names:

\`\`\`python
guest_names = [
    "Guest 1",
    "Guest 2",
    "Guest 3",
    "Guest 4",
]
\`\`\`

## Running the Application

To start the application, run the following command in your terminal:

\`\`\`bash
python app.py
\`\`\`

Replace \`app.py\` with the name of your main application file if it is different.

