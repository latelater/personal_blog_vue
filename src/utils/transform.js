// transform.js

    let str = `奴隶社会,非洲,古埃及文明,金字塔
,亚洲,两河流域文明,汉谟拉比法典
,,古印度,种姓制度
,,,佛教的创立
,欧洲,希腊,希腊城邦
,,,雅典民主
,,罗马,城邦
,,,帝国的征服与扩展
,,希腊罗马古典文化,建筑艺术
,,,公历`
    function str2json(str) {
        //将字符串按照\n和,进行切割并存储
        let arr = str.split('\n');
        arr = arr.map((item) => {
            return item.split(',');
        })
        //第i行j列个元素保留了第i行j列之前个元素的结果，最终第i个数组的第一个不为空的元素保留了第i个数组拼接的一个结果
        for(let i = 0; i < arr.length; i++) {
            for(let j = arr[i].length-1; j >= 0; j--) {
                if(j == arr[i].length-1) {
                    let temp = [{
                        [arr[i][j]]: []
                    }]
                    arr[i][j] = temp;
                } else if(arr[i][j] != '') {
                    let temp = [{
                        [arr[i][j]]: arr[i][j+1]
                    }]
                    if(j == 0) {
                        temp = [{
                            [arr[i][j]]: arr[i][j+1]
                        }] 
                    }
                    arr[i][j] = temp;
                } else {
                    // 在数组的最后加入第一个不为空的元素的位置
                    let len = arr[i].length;
                    arr[i][len] = j+1;
                    break;
                }
            }
        }

        for(let i = arr.length - 1; i >= 1; i --) { // 倒着遍历arr，第0行不需要遍历
            let len = arr[i].length-1;
            let j = arr[i][len];
            for(let k = i-1; k >= 0; k --) {
                if(arr[k][j-1] && arr[k][j-1] != '') { // 找到他的上一个并且把他加进去
                    for(let x in arr[k][j-1][0]) { // 这里只是为了获得他的value，只执行一次
                       arr[k][j-1][0][x].push(arr[i][j][0]);
                    }
                    break;// 找到他的上一级就停止
                }
            }
        }
        let result = arr[0][0][0];
        return result;
    }

    let result = str2json(str);
    console.log(result);