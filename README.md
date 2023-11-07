# Subway Account Generator

This is a Node.js script that generates a Subway account using the Subway Rewards API. It also appends the generated account details to a text file.

## Important

If you want to access the account on the app you will have to use an email you have access to. Subway asks for a verification code every time you attempt to login.

## Prerequisites

Before running the script, make sure you have the following:

- Node.js installed on your machine.
- A valid Gmail email address. Update the `config.json` file with your Gmail email address.

## Installation

1. Clone this repository to your local machine.
2. Open a terminal and navigate to the project directory.
3. Run the following command to install the required dependencies: npm install

## Usage

1. Update the `config.json` file with your Gmail email address.
2. Open a terminal and navigate to the project directory.
3. Run the following command to start the script: node .
4. The script will generate a random email address using the Gmail "plus trick" and use it to register a Subway account.
5. The generated account details will be appended to the `accounts.txt` file in the format: `<email>:SubwayBot@123`.
6. If successful, the script will display a that you have successfully generated an account.

