const P = 3.14;
let radius = 6.378e6; 
document.write('The radius is ');
document.write (radius);
document.write('<br><br>');
let circumference = 2*(P*radius);
document.write('The circumference is ');
document.write(circumference)
document.write('<br><br>');
let surfaceArea= 4*P*(radius**2);
document.write('The surface area is ');
document.write(surfaceArea);
document.write('<br><br>');
let volume = (4/3)*(P * radius ** 3);
document.write('The volume is ');
document.write(volume);
