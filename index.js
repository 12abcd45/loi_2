class NearestNeighbor{
	constructor(n,arr){
		this.size=n;
		this.arr=arr;
		this.budget=0;
		this.answer=[];
	}
	calculate(){
		var temp=[];
		var ans=[];
		var visited=new Array();
		for(var i=0;i<=this.size;i++){
			visited[i]=false;
		}
		var row=0,minimum=1000000;
		for(i=1;i<=this.size;i++){
			for(var j=1;j<=this.size;j++){
				if(this.arr[row][j]<minimum && visited[j]==false && this.arr[row][j]!=0){
					minimum=j;
				}
			}
			temp.push(minimum);
			this.budget+=this.arr[row][minimum]
			row=minimum;
			visited[row]=true;
			minimum=1000000;
		}
		ans.push(temp);
		return ans;
	}
}

var distance=[
	[0,12,13],
	[12,0,14],
	[13,14,0]
];
var set=new NearestNeighbor(2,distance);
set.calculate()