export const contractAddress = "0xb213D0CC524d5de5aAfF325e8d382A05632C09F5";
export const abi = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_addrOfPart",
        "type": "address"
      }
    ],
    "name": "acceptReq",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_hash",
        "type": "string"
      }
    ],
    "name": "addCoverImg",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_start",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_regEnd",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_end",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_desc",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_prize",
        "type": "uint256"
      }
    ],
    "name": "addHacks",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "allHacks",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "hackName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "startDate",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "regEndDate",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "endDate",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "description",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "prizeAmount",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "hasStarted",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "hasEnded",
            "type": "bool"
          },
          {
            "internalType": "address",
            "name": "hackOwner",
            "type": "address"
          }
        ],
        "internalType": "struct Deethon.Hack[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_addrOfHack",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_addrOfParts",
        "type": "address"
      }
    ],
    "name": "applyForHack",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "endHack",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getCoverImg",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getListOfApplicant",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_prize",
        "type": "uint256"
      }
    ],
    "name": "increasePrize",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "isSellected",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "myHack",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "hackName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "startDate",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "regEndDate",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "endDate",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "description",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "prizeAmount",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "hasStarted",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "hasEnded",
            "type": "bool"
          },
          {
            "internalType": "address",
            "name": "hackOwner",
            "type": "address"
          }
        ],
        "internalType": "struct Deethon.Hack",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_start",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_regEnd",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_end",
        "type": "string"
      }
    ],
    "name": "setDates",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_desc",
        "type": "string"
      }
    ],
    "name": "setDetails",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "startHack",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "withdrawFunds",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }
]