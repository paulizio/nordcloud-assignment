# Nordcloud Tech assignment - Network speed

### How to run app

Run the following commands in the root of the app and see result printed in terminal:
```
npm install && npm run start
```

### How to run tests
```
npm install && npm run test
```

### Optional

How to deploy this to AWS (use e.g. AWS SAM template):
1. Create AWS Lambda function and input code of this application there
2. Create Api Gateway Api which triggers AWS Lambda
3. Deploy stack


## Problem

Write a program that solves the most suitable (with highest non-zero speed) network station for a device at a given point <code>(x, y)</code>.

 This problem can be solved in 2-dimensional space. Network stations have reach and speed that depends on the distance to the station.
 
 A network station’s speed can be calculated as follows:
 
 <code> speed = (reach - device's distance from network station)^2 </code>if<code> distance > reach, speed = 0 </code>


 Network stations are located at points <code> (x, y) </code> and have reach <code>r</code>:
  <table>
    <thead>
      <tr>
        <th>x</th>
        <th>y</th>
        <th>reach</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>0</td>
        <td>0</td>
        <td>9</td>
      </tr>
      <tr>
        <td>20</td>
        <td>20</td>
        <td>6</td>
      </tr>
      <tr>
        <td>10</td>
        <td>0</td>
        <td>12</td>
      </tr>
      <tr>
        <td>5</td>
        <td>5</td>
        <td>13</td>
      </tr>
      <tr>
        <td>99</td>
        <td>25</td>
        <td>2</td>
      </tr>
    </tbody>
  </table>

Print out the most suitable network station and the network speed from devices <code> (x, y):(0, 0), (100, 100), (15, 10), (18, 18), (13, 13) </code> **and** <code> (25, 99)</code>

Program should output the solution to these two cases:

- Best station found, output station location and speed
- No station within reach found, output error message

It can be in the form of:

*“Best network station for point x,y is x,y with speed z”*

*“No network station within reach for point x,y”*