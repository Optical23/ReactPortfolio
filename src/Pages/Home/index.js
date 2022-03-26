import React from 'react';
import {
    Container,
    PageName,
    Bio,
    AboutMeText
} from './HomeElements';
function Home() {
    return ( 
    <Container>
        <PageName>About Me</PageName>
        <Bio> I am a Full Stack Web Developer from the Dallas Texas</Bio>
        <AboutMeText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra lorem eget dolor pulvinar maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras et tincidunt augue. Duis ac condimentum magna. Ut et pulvinar metus, vel vehicula justo. Aliquam congue, ex sed ullamcorper viverra, arcu nisi euismod nisi, ut dapibus ante tellus sollicitudin purus. Ut commodo, tortor non placerat pharetra, sem lectus dapibus dui, vitae dignissim sem ex sit amet nisi. Aenean elementum, odio id ullamcorper congue, tortor ante molestie est, sed luctus diam libero vitae justo.
        </AboutMeText>
     </Container> 
     );
}

export default Home;