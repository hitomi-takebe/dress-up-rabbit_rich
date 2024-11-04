console.log("現在時刻を表示");
// 現在時刻を表示する関数
function updateTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // HTMLのid="time"の要素に現在時刻を表示
    $("#time").text(date.toLocaleTimeString());
    // 時間データをオブジェクトとして返す
    return { hour: hours, minute: minutes, second: seconds };
}


// 入力情報の取得と表示
$("#button1").click(function () {
    // テキストボックスのvalue値を取得
    const time2 = $("#mtg_time").val();
    const hours2 = $("#pre_hours").val();
    const minutes2 = $("#pre_mins").val();  
    // spanタグに値を設定
    $("#span1").text(time2);
    $("#span2").text(hours2);
    $("#span3").text(minutes2);      

    console.log("準備・移動の時間をpreに取得");
    // diffに準備・移動時間の分数を入力
    let diff = hours2 * (60 * 60 * 1000) + minutes2 * (60 * 1000);
    console.log(Math.abs(pre) / (60 * 1000),"diffに準備・移動に必要な分数を記録しています。");
    console.log(time2.getTime())

    // let pre = time2.getTime() - diff.getTime();
    // console.log(`準備に必要な時間は${pre().hour}時${pre().minute}分になります。`)
    // console.log(`現在の時刻は${date().hour}時${date().minute}分${date().minute}秒になります。`)
    });
    

// if (currentTime.hour === alerm_hour && currentTime.minute === alerm_minute) {
//     $("#alerm_text").text("時間になりました。");
//     console.log(`現在の時刻が${alerm_hour}時${alerm_minute}分になりました。`);
//     setTimeout(endAlerm, 30000); // 30秒後にアラームメッセージを消す
// }

// アラームメッセージを非表示にする
function endAlerm() {
    console.log("1分経ったので表示が消えます。");
    $("#alerm_text").text("");
}

// 30%と50%のセールチェックを呼び出す
function sale() {
    sale30();
    sale50();
}

// 30%セール機能
function sale30() {
    const currentTime = updateTime();
    const sale_hour = 15; // 時
    const sale_minute = 0; // 分

    if (currentTime.hour === sale_hour && currentTime.minute === sale_minute) {
        $("#sale_text").text("特売になります！！！！！！！");
        $("#sale").text("30%引き");
    }
}

// 50%セール機能
function sale50() {
    const currentTime = updateTime();
    const sale_hour = 19; // 時
    const sale_minute = 0; // 分

    if (currentTime.hour === sale_hour && currentTime.minute === sale_minute) {
        $("#sale_text").text("特売になります！！！！！！！");
        $("#sale").text("50%引き");
        setTimeout(endSale, 30000); // 30秒後にセール表示を消す
    }
}

// セール表示を非表示にする
function endSale() {
    console.log("表示が消えます。");
    $("#sale_text").text("");
    $("#sale").text("");
}

// 1秒ごとに各機能を実行
// setInterval(updateTime, 1000); // 現在時刻の更新
// setInterval(alerm, 1000);      // アラームのチェック
// setInterval(sale, 1000);       // セールのチェック
