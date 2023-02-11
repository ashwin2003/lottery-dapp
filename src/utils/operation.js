// TODO 6 - Call buy_ticket entrypoint in the Lottery contract by completing buyTicketOperation

import { tezos } from "./tezos";

export const buyTicketOperation = async () => {
  try {
    const contract = await tezos.wallet.at(
      "KT1LGDh9YAwDNcFsUyvK1s8uyFhkacYTZxtx"
    );
    const op = await contract.methods.buy_ticket().send({
      amount: 1,
      mutez: false,
    });
    console.log(contract);
    console.log(op);
    await op.confirmation(1);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// TODO 10 - Call end_game entrypoint in the Lottery contract by completing endGameOperation

export const endGameOperation = async () => {
  try {
    const contract = await tezos.wallet.at(
      "KT1LGDh9YAwDNcFsUyvK1s8uyFhkacYTZxtx"
    );
    const op = await contract.methods.end_game().send();
    await op.confirmation(1);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
