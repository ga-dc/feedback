#!/usr/bin/env node

if(!process.argv[2]){
  console.log("Please specify a project number, e.g.")
  console.log("  $ feedback 3")
  process.exit()
}

var project = process.argv[2]
var rubric = require("./rubrics/project-" + project + ".js")

var fs = require("fs");
var prompt = require('prompt-sync')({
  history: require('prompt-sync-history')(),
  sigint: true
});

var markdown = ""
markdown += rubric.header ;

var comments = prompt("Enter code comments url:");
markdown += "[inline code comments]("+comments+")"+ "\n";
for( var criterium in rubric.criteria ){
  markdown += "## " + criterium+ "\n";
  console.log("\n" + criterium)
  rubric.criteria[criterium].forEach(function(e,i){
   console.log(i+": "+ e);
  })
  var instructions = prompt(" Enter 0-3: ")
  markdown += "**" + instructions + ": " + rubric.labels[instructions] +  "**\n"
  markdown += ">" + rubric.criteria[criterium][instructions]+ "\n";
  markdown += "\n"
}
fs.writeFile("feedback.md",markdown,"utf8")

