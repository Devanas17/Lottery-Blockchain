const { network } = require("hardhat")
const { developmentChains, GAS_PRICE_LINK, BASE_FEE } = require("../helper-hardhat-config")

module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    if (chainId == 31337) {
        log("Local network detected! Deploying mock...")
        // deploy a mock vrfCoordinator
        await deploy("VRFCoordinatorV2Mock", {
            from: deployer,
            log: true,
            args: [BASE_FEE, GAS_PRICE_LINK],
        })
        log("Mocks Deployed!")
        log("-----------------------------------------------------")
        log(
            "You are deploying to a local network, you'll need a local network running to interaction."
        )
        log(
            "Please run `yarn hardhat console --network localhost` to interact with deployed smart contracts!"
        )
        log("-----------------------------------------------------")
    }
}

module.exports.tags = ["all", "mocks"]
