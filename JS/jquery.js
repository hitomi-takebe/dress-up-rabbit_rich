function date() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    // hour 時間　minute 分 second 秒 
    const time = {hour: hours, minute: minutes, second: seconds}
    document.getElementById("time").innerHTML = date.toLocaleTimeString();
    return time
}
// アラーム
function alerm(){
        console.log(`現在の時刻は${date().hour}時${date().minute}分${date().minute}秒になります。`)
        // 設定したい時刻を入力する
        var alerm_hour = 23 // 時
        var alerm_minute = 50 //分
        if(date().second == alerm_hour && date().minute == alerm_minute){
            document.getElementById("alerm_text").innerHTML = "時間になりました。"
            console.log(`現在の時刻が${alerm_hour}時${alerm_minute}分になりました。`)
            // 30秒後にend_alermが呼び出される
            setTimeout(end_alerm,30000)
        }
    }
    // アラームでhtml「時間になりました。」を非表示にする
    function end_alerm() {
        console.log("1分経ったので表示が消えます。")
        document.getElementById("alerm_text").innerHTML = ""
    }
    // 30%のセールと50%のセールを呼び出す
    function sale() {
        setInterval(sale30,1000);
        setInterval(sale50,1000);
    }

    // 30%引き
    function sale30() {
        var sale_hour = 15 // 時
        var sale_minute = 0 //分
        if(date().second == sale_hour && date().minute == sale_minute){
            document.getElementById("sale_text").innerHTML = "特売になります！！！！！！！"
            document.getElementById("sale").innerHTML = "30%引き"
        }
    }

    // 50%引き
    function sale50() {
        var sale_hour = 19 // 時
        var sale_minute = 0 //分
        if(date().second == sale_hour && date().minute == sale_minute){
            document.getElementById("sale_text").innerHTML = "特売になります！！！！！！！"
            document.getElementById("sale").innerHTML = "50%引き"
            setTimeout(end_sale,30000)
        }
    }

    // セールの表示を終了する
    function end_sale(){
        console.log("表示が消えます。")
        document.getElementById("sale_text").innerHTML = ""
        document.getElementById("sale").innerHTML = ""
    }
    // 1秒ごとに呼び出される
    setInterval(date,1000);
    setInterval(alerm,1000);
    setInterval(sale,1000);