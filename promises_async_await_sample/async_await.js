function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;
            if (dogWalked) {
                resolve("you walked the dog 🐕‍🦺");
            } else {
                reject("You didn't walk the dog!");
            }
        }, 1500);
    });
}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true;

            if (kitchenCleaned) {
                resolve("You cleaned the kitchen 🧹");

            } else {
                reject("You did not clean the kitchen!");
            }
        }, 2500);
    });
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = true;
            if (trashTakenOut) {
                resolve("You took out the trash ♻");

            } else {
                reject("You did not take out the trash");
            }
        }, 500);
    });
}

async function doChores() {
    try {
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);
    }
    catch (error) {
        console.error(error);
    }
}

doChores();