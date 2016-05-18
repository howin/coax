# coax
Table convert: row => column

We assume the following scene, shopping, and then use the coupon system records as follows:
Time        Type            Amount
16:55       Save full         5
16:55       vip               4
16:55       Package           10

And, the boss wanted to see every week coupon for the user save much money, there are reports

Date  Save full    vip   Package  ... (the number of columns is variable)
05-16    100       200    300
05-17    100       200    300
05-18    100       200    300

Many systems will have this requirement, we have a small JS (coax) immediately satisfied.

Usage：

row2Col(jsonData,keyField,colField,valueField,emptyValue)

jsonData: json formmat data
keyField: key field
colField: column field
valueField: value field
emptyValue: the default value for column

example:
var test={"resultList":[{"lvl":30,"roles":138,"lang":"0"},{"lvl":31,"roles":140,"lang":"0"},{"lvl":32,"roles":142,"lang":"0"},{"lvl":33,"roles":146,"lang":"0"},{"lvl":103,"roles":194,"lang":"1"},{"lvl":111,"roles":198,"lang":"116"},{"lvl":10,"roles":92,"lang":"122"},{"lvl":154,"roles":216,"lang":"13"},{"lvl":113,"roles":200,"lang":"138"},{"lvl":120,"roles":202,"lang":"174"},{"lvl":180,"roles":220,"lang":"184"},{"lvl":1,"roles":82,"lang":"202"},{"lvl":11,"roles":96,"lang":"202"},{"lvl":130,"roles":208,"lang":"208"},{"lvl":150,"roles":212,"lang":"208"},{"lvl":300,"roles":230,"lang":"217"},{"lvl":88,"roles":180,"lang":"221"},{"lvl":1,"roles":84,"lang":"222"},{"lvl":18,"roles":110,"lang":"227"},{"lvl":260,"roles":224,"lang":"28"},{"lvl":153,"roles":214,"lang":"35"},{"lvl":87,"roles":176,"lang":"38"},{"lvl":1,"roles":88,"lang":"44"},{"lvl":2,"roles":86,"lang":"44"},{"lvl":4,"roles":88,"lang":"44"},{"lvl":7,"roles":94,"lang":"44"},{"lvl":11,"roles":94,"lang":"44"},{"lvl":12,"roles":98,"lang":"44"},{"lvl":13,"roles":100,"lang":"44"},{"lvl":15,"roles":102,"lang":"44"},{"lvl":16,"roles":104,"lang":"44"},{"lvl":17,"roles":106,"lang":"44"},{"lvl":18,"roles":108,"lang":"44"},{"lvl":20,"roles":112,"lang":"44"},{"lvl":22,"roles":114,"lang":"44"},{"lvl":26,"roles":120,"lang":"44"},{"lvl":28,"roles":118,"lang":"44"},{"lvl":32,"roles":126,"lang":"44"},{"lvl":33,"roles":132,"lang":"44"},{"lvl":36,"roles":132,"lang":"44"},{"lvl":37,"roles":136,"lang":"44"},{"lvl":39,"roles":140,"lang":"44"},{"lvl":47,"roles":140,"lang":"44"},{"lvl":48,"roles":142,"lang":"44"},{"lvl":51,"roles":144,"lang":"44"},{"lvl":52,"roles":146,"lang":"44"},{"lvl":56,"roles":148,"lang":"44"},{"lvl":57,"roles":154,"lang":"44"},{"lvl":58,"roles":152,"lang":"44"},{"lvl":60,"roles":156,"lang":"44"},{"lvl":66,"roles":156,"lang":"44"},{"lvl":67,"roles":164,"lang":"44"},{"lvl":68,"roles":162,"lang":"44"},{"lvl":70,"roles":174,"lang":"44"},{"lvl":74,"roles":166,"lang":"44"},{"lvl":76,"roles":168,"lang":"44"},{"lvl":78,"roles":170,"lang":"44"},{"lvl":83,"roles":172,"lang":"44"},{"lvl":86,"roles":176,"lang":"44"},{"lvl":87,"roles":178,"lang":"44"},{"lvl":89,"roles":182,"lang":"44"},{"lvl":91,"roles":184,"lang":"44"},{"lvl":100,"roles":192,"lang":"44"},{"lvl":101,"roles":192,"lang":"44"},{"lvl":103,"roles":198,"lang":"44"},{"lvl":127,"roles":206,"lang":"44"},{"lvl":131,"roles":210,"lang":"44"},{"lvl":180,"roles":218,"lang":"44"},{"lvl":220,"roles":222,"lang":"44"},{"lvl":260,"roles":230,"lang":"44"},{"lvl":300,"roles":230,"lang":"44"},{"lvl":70,"roles":162,"lang":"5"},{"lvl":121,"roles":204,"lang":"68"},{"lvl":100,"roles":188,"lang":"72"},{"lvl":36,"roles":134,"lang":"79"},{"lvl":100,"roles":190,"lang":"82"}],"retCode":0}

row2Col(test.resultList,"lvl","serverId","roles",0);
