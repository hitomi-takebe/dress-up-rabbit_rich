// $ ←これがjQueryになります！🤗
// ボタンを押すとAさんとBさんのジャンケンが作られる

$("#change").on("click", function () {
    console.log("定義をする");

    var a_num = Math.floor(Math.random() * 4);
    console.log(a_num, "a_numにて表情を指定");

    var b_num = Math.floor(Math.random() * 4);
    console.log(b_num, "b_numにて服装を指定");

    console.log(a_num, "a_numを表情の名前に上書きする");
    if (a_num === 0) {
        var a_num = "ニコニコしてる";//値を代入
        $('#face_p').html(a_num);
        $('#face_randomShow').attr('src', "img/rabbit_face_cute.PNG");
    } else if (a_num === 1) {
        var a_num = "ビックリしてる";//値を代入
        $('#face_p').html(a_num);
        $('#face_randomShow').attr('src', "img/rabbit_face_surprise.PNG");
    } else if (a_num === 2) {
        var a_num = "悲しんでいる";//値を代入
        $('#face_p').html(a_num);
        $('#face_randomShow').attr('src', "img/rabbit_face_sad.PNG");
    } else if (a_num === 3) {
        var a_num = "怒っている";//値を代入
        $('#face_p').html(a_num);
        $('#face_randomShow').attr('src', "img/rabbit_face_angry.PNG");
    }
    // 洋服を決める
    console.log(b_num, "b_numを洋服の名前に上書きする");
    if (b_num === 0) {
        var b_num = "サラリーマン";//値を代入
        $('#clothes_p').html(b_num);
        $('#clothes_randomShow').attr('src', "img/rabbit_suit.PNG");
    } else if (b_num === 1) {
        var b_num = "お兄さん";//値を代入
        $('#clothes_p').html(b_num);
        $('#clothes_randomShow').attr('src', "img/rabbit_tshirs.PNG");
    } else if (b_num === 2) {
        var b_num = "コックさん";//値を代入
        $('#clothes_p').html(b_num);
        $('#clothes_randomShow').attr('src', "img/rabbit_cock.PNG");
    } else if (b_num === 3) {
        var b_num = "ヤンキー";//値を代入
        $('#clothes_p').html(b_num);
        $('#clothes_randomShow').attr('src', "img/rabbit_y.PNG");
    };

    console.log("励ましコメント");
    if (a_num === "怒っている" && b_num === "ヤンキー" || a_num === "怒っている" && b_num === "サラリーマン" || a_num === "怒っている" && b_num === "コックさん") {
        console.log("ストレス溜め込みすぎないようにね。");
        $('#imp2').html("＼ストレス溜め込みすぎないようにね。／");
        $("#imp2").css("color", "#878719");
        $("#imp2").css("font-size", "1.2em");
    } else if (a_num === "悲しんでいる") {
        console.log("どう思う？");
        $('#imp2').html("＼元気出してね。／");
        $("#imp2").css("color", "#878719");
        $("#imp2").css("font-size", "1.2em");
    } else if (a_num === "怒っている" && b_num === "お兄さん") {
        console.log("マイルドヤンキー出没");
        $('#imp2').html("／マイルドヤンキーだぞ！＼");
        $("#imp2").css("color", "red");
        $("#imp2").css("font-size", "2em");
        $('.popup').addClass('show').fadeIn();
        // この下は消さない🤗
    } else {
        console.log("何もしない");
        $('#imp2').html("");
    };
});

$("#reset").on("click", function () {
    console.log("最初の状態に戻す");
    $('#face_randomShow').attr('src', "img/rabbit_face.PNG");
    $('#clothes_randomShow').attr('src', "img/rabbit.PNG");
    $('#face_p').html("どんな");
    $('#clothes_p').html("うさぎさん？");
    $('#imp2').html("");
});

// if (a_num === "怒っている" && b_num === "お兄さん") {
//     console.log(a_num,定義が入っているかの確認);
// };

// ↓ここから修正
$('#close').on('click', function () {
    console.log("マイルドヤンキー出没時のポップアップ");
    $('.popup').fadeOut();
    // $('#reset').on('click');
});



//  } else if (a_san === "グー" && b_san === "グー" || a_san === "チョキ" && b_san === "チョキ" || a_san === "パー" && b_san === "パー") {
//     console.log("あいこ");
//     $('#hantei').html("あいこだよ。もう一度遊んでね。");


// $(document).ready(function () {
//     $("#screenshot-btn").click(function () {
//         html2canvas(document.getElementById("target-table")).then(function (canvas) {
//             var imgData = canvas.toDataURL("image/png");
//             var link = document.createElement(\'a\');
// 					link.href = imgData;
//             link.download = \'table-screenshot.png\';
//             link.click();
//         });
//     });
// });

