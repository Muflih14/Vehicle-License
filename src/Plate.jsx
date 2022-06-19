import React from "react";

export default function Plate() {
  const val1 = (Math.floor(Math.random() * 100) + 100).toString().substring(1);
  const val2 = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
  
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (var i = 0; i < 2; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return (
    <div className="LicensePlate text-center">
      <h1> {val1} - {text} - {val2}  </h1>
    </div>
  );
}
