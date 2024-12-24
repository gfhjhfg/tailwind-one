(function(window){
    function setSizeConfig(max,unit) {
        var config = {};
        for (var i=0;i<max;i++) {
            config[i]=`${i}${unit}`;
        }
        return config;
    }
    window.tailwind.config = {
        // 黑暗模式
        darkMode: 'selector',
        // 扩展主题
        theme: {
          fontFamily: {
            'sans': ['SourceHanSansCN-Regular']
          },
          extend: {
            colors: {
              clifford: '#da373d',
              primary: '#020266'
            },
            width: setSizeConfig(2080,"px"),
            height: setSizeConfig(2080,"px"),
            fontSize: setSizeConfig(2080,"px"),
            marginTop: setSizeConfig(2080,"px"),
          },
        },
    };
})(window)