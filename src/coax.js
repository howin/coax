function unique(arr) {
    var result = [], hash = {};
    for (var i = 0, elem; (elem = arr[i]) != null; i++) {
        if (!hash[elem]) {
            result.push(elem);
            hash[elem] = true;
        }
    }
    return result;
}

function  row2Col(jsonData,keyField,colField,valueField,emptyValue) {
    //数值处理
    var colValues=[];

    for(var o in jsonData){
        colValues.push(jsonData[o][colField]);
    }
    colValues=unique(colValues);
    colValues.sort();

    var tempCol={};
    for(var i=0;i<colValues.length;i++){
        tempCol[colValues[i]]=emptyValue;
    }

    var tempResult={};
    for(var o in jsonData){
        var data=jsonData[o];

        var temp=tempResult[data[keyField]];
        if(temp==null){
            temp=$.extend(true,{},tempCol);
        }

        for(var i=0;i<colValues.length;i++){
            if(data[colField]==colValues[i]){
                temp[colValues[i]]=data[valueField];
            }
        }

        tempResult[data[keyField]]=temp;

    }

    return {data:tempResult,fds:colValues};
}