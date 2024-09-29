
# Debate App

This repository contains a simple application for managing debates, allowing guests to randomly select whom they will ask questions. 

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [How to Clone the Repository](#how-to-clone-the-repository)
- [Changing Guest Names](#changing-guest-names)

## Installation

To set up the project, clone the repository and install the required dependencies. Ensure you have Python and pip installed.

```bash
git clone https://github.com/TomasMaksy/KUR_debate_randomq.git
cd KUR_debate_randomq
# Create a virtual environment if you want (optional)
python -m venv venv
# Activate the virtual environment (Windows)
venv\Scripts\activate
# Activate the virtual environment (macOS/Linux)
source venv/bin/activate
# Install required packages
pip install -r requirements.txt
```

## Usage

Once the installation is complete, run the application using the following command:

```bash
python app.py
```

## How to Clone the Repository

To clone the repository, use the following command:

```bash
git clone https://github.com/TomasMaksy/KUR_debate_randomq.git
```

## Changing Guest Names

To change the names for the guests, open the `app.py` file and modify the list of names:

```python
guest_names = ["Guest 1", "Guest 2", "Guest 3", "Guest 4"]
```
