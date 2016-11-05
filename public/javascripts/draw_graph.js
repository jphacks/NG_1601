var draw_graphModule = function(data){
 
var w = 300;
var h = 300;

var padding = 20; // グラフの余白
var xAxisPadding = 40; // x軸表示余白
var yAxisPadding = 60; // x軸表示余白

var displayNum = data.length - 1; // 表示日数
var dayWidth = (w - xAxisPadding - padding * 2) / displayNum; // 1日分の横幅

// SVG作成
var svg = d3.select("#result")
	.append("svg")
	.attr("width", w)
	.attr("height", h);

// 軸
var xScale = d3.time.scale()
	.domain([
		data[0][0],
		data[6][0]
	])
	.range([padding, w - xAxisPadding - padding]);

var yScale = d3.scale.linear()
	.domain([100, 0])
	.range([padding, h - yAxisPadding - padding]);

var xAxis = d3.svg.axis()
	.scale(xScale)
	.tickFormat(d3.time.format("%d"))
	.ticks(7);

var yAxis = d3.svg.axis()
	.scale(yScale)
	.orient("left");

svg.append("g")
	.attr("class", "axis")
	.attr("transform", "translate(" + xAxisPadding + ", " + (h - yAxisPadding) + ")")
	.call(xAxis)
	.selectAll("text")
	.attr("x", 10)
	.attr("y", -5)
	.attr("transform", "rotate(90)")
	.style("text-anchor", "start");

svg.append("g")
	.attr("class", "axis")
	.attr("transform", "translate(" + xAxisPadding + ", 0)")
	.call(yAxis);

// 折れ線グラフ
var line = d3.svg.line()
	.x(function(d, i){
		return (i * dayWidth) + xAxisPadding + padding;
	})
	.y(function(d){
		return h - padding - yAxisPadding - ((h - yAxisPadding - padding * 2) / 100 * d[1] );
	});

svg.append("path")
	.attr("class", "weight")
	.attr("d", line(data))
	.attr("stroke", "#ed5454")
	.attr("fill", "none");

svg.data(data)
   .selectAll("rect")  // SVGでの四角形を示す要素を指定
    .data(data) // データを設定
    .enter()
    .append("rect") 
    .attr("x", function(d,i){   // X座標を配列の順序に応じて計算
        return (i * dayWidth) + xAxisPadding + padding - 5;
    })
    .attr("y", function(d){ // 縦幅を配列の内容に応じて計算
        return h - padding - yAxisPadding - ((h - yAxisPadding - padding * 2) / 3000 * d[2] );
    })
    .attr("height", function(d){    // 縦幅を配列の内容に応じて計算
        return (h - yAxisPadding) - (h - padding - yAxisPadding - ((h - yAxisPadding - padding * 2) / 3000 * d[2] ));
    })
    .attr("width", 10)  // 棒グラフの横幅を指定
    .attr("style", "fill:orange") // 棒グラフの色を赤色に設定


// 散布図
svg.selectAll(".weight_circle")
    .data(data)
    .enter()
    .append("circle")
	.attr("class", "weight_circle")
    .attr("cx", function(d,i){
        return (i * dayWidth) + xAxisPadding + padding;
    })
    .attr("cy", function(d){
        return h - padding - yAxisPadding - ((h - yAxisPadding - padding * 2) / 100 * d[1] );
    })
    .attr("r", 0)
    .attr("stroke", "#ed5454")
    .attr("stroke-width", "1px")
    .attr("fill", "#f8d7d7")
	.transition()
    .duration(1000)
    .attr("r", 4);

// テキスト
svg.selectAll(".weight_text")
	.data(data)
	.enter()
	.append("text")
	.attr("class", "weight_text")
	.text(function (d) {
		return d[2];
	})
	.attr("font-size", "12px")
	.attr("fill", "#ed5454")
	.attr("x", function(d, i){
		return (i * dayWidth) + xAxisPadding + padding - 15;
	})
	.attr("y", function(d){
		return h - padding - yAxisPadding - ((h - yAxisPadding - padding * 2) / 3000 * d[2]) - 5;
	});
}