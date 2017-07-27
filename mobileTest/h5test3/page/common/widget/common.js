// 初始化rem
function setRem(){
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
}
setRem();
window.addEventListener('resize',setRem);

// 识别ios/adr 平台
if (window.navigator.userAgent.indexOf('Android') > -1) {
    document.body.className = document.body.className + ' android';
} else {
    var _iOSDevice = !!navigator.platform.match(/iPhone|iPod|iPad/);
    var _iOSVersion = 0;
    if(_iOSDevice){
     _iOSVersion = (navigator.userAgent.match(/\b[0-9]+_[0-9]+(?:_[0-9]+)?\b/)||[''])[0].replace(/_/g,'.');
    }
    if (_iOSVersion >= '9.0') {
        document.body.className = document.body.className + ' ios-9';
    }
    document.body.className = document.body.className + ' ios';
}