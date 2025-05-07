function makeCofee() {
    console.log("☕ スタッフ：先にコーヒーを準備します...");
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("✅ コーヒーが出来ました！");
            resolve();
        }, 2000); // 2秒
    });
}

function makeSandwich() {
    console.log("🥪 スタッフ：次にサンドイッチを準備します...");
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("✅ サンドイッチが出来ました！");
            resolve();
        }, 3000); // 3秒
    });
}

async function serveCustomer() {
    await Promise.all([makeCofee(),makeSandwich()]);
    console.log("🍽️ スタッフ：すべてできたので配膳します！");
}

console.log("🥪 お客さんがコーヒーとサンドイッチを注文しました");
serveCustomer();