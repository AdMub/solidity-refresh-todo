The following instruction will work on both local and GitHub Codespaces users. For Linux and MacOS users, run the following commands on your terminal.

curl -fsSL https://foundry.paradigm.xyz | bash
source ~/.bashrc
foundryup


check that the installation worked, open a new terminal and run the following command on your terminal.
forge --version


Run the following command.
forge init --force todos


Delete the following files based on the following paths:
src/Counter.sol 
script/Counter.s.sol
test/Counter.t.sol


Create a new file called Todos.sol in the src directory


Run the following command to format your code.
forge fmt


Run the following command to compile your code.
forge compile


Head to the todos directory. Head to the test directory and create a new file called Todos.t.sol


Run the following command inside the todos directory.
forge test


To deploy your smart contract to the testnet, let’s start by creating your Infura API key.
Create a new account at https://www.infura.io. Then head to the Infura Dashboard.
1. Click the "Create new API key".
2. Name the API key as 'todos'.
3. Copy your API key.


 Head to the root directory of your project. Head to the todos directory. Then create a .env file.


 Create an account at https://etherscan.io. Once created, head to https://etherscan.io/myaccount with your logged in account. Head to the API Keys section.


 Navigate to the todos directory and run the following command.
source .env


Deploy your Todos smart contract to the Sepolia network and verify it on Sepolia by running the following command:
forge create --rpc-url "${SEPOLIA_RPC_URL}" --broadcast --private-key "${PRIVATE_KEY}" --verifier-url "https://api-sepolia.etherscan.io/api" -e "${ETHERSCAN_API_KEY}" --verify src/Todos.sol:Todos