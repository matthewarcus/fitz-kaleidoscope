const frag = `
#ifdef GL_ES
precision highp float;
#endif

#define SEGMENTS 10.0  
#define PI 3.141592653589
   
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

uniform sampler2D image;

varying vec2 v_texcoord; 

void main(void)
{
    vec2 uv = (2.0*gl_FragCoord.xy-u_resolution)/u_resolution.y;
    //vec2 uv = (gl_FragCoord.xy-u_resolution)/u_resolution.y;

    // make mouse
    // vec2 mouse = u_mouse / u_resolution.y; 
    vec2 mouse = (2.0*u_mouse.xy-u_resolution)/u_resolution.y;

    //get angle and radius
    float radius = length(uv);
    float angle = atan(uv.y, uv.x);
     
    // get a segment 
    angle /= PI;
    angle *= SEGMENTS; 
    
    // repeat segment
    angle = mod(angle,2.0);
    angle = min(angle,2.0-angle);
    angle += u_time * 0.3;

    // unsquash segment
    angle /= SEGMENTS;
    angle *= PI;
    
    vec2 point = 0.618*vec2(radius * cos(angle), radius * sin(angle));
    point += mouse;
    point = fract(point);
    vec4 color = texture2D(image, point);
    
    gl_FragColor = color;
}   
` 
