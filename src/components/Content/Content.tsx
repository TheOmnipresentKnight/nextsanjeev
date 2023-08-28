import Box from '@/shared/Box';
import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';

const Content: React.FC = () => {
  return (
      <div className="content">
          <Container fluid>
          <h1>Welcome to Our Website</h1>
          <Box>
   <Col lg={6} className="mt-4">
          <Box className="shadow rounded-3 ">
            <h5 className="p-3">Pending Approval</h5>
            <div className="scrollable-jobArchitectPendingApproval"></div>
          </Box>
        </Col>{' '}
          </Box>
      {/* <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius
        ipsum vitae accumsan. Nullam ultricies fermentum nulla, sit amet
        posuere mi aliquet non. Vivamus vel nisi nec ex consequat semper.
        Nulla facilisi. Lorem Ipsum this is just some sample text, Vivamus auctor sollicitudin orci, nec facilisis quam
        fringilla nec.
      </p>

      <h2>About Us</h2>
      <p>
        Vestibulum sed lacinia metus, non fringilla ante. Integer a turpis
        et turpis aliquet aliquam. Praesent non metus ac massa congue
        ultrices eu nec odio. Fusce nec tellus non est dignissim tincidunt.
        Nulla facilisi. Cras vel justo vel turpis convallis euismod.
      </p>

      <h2>Our Services</h2>
      <p>
        Curabitur vestibulum elit eu libero pharetra, eu iaculis justo
        efficitur. Fusce vehicula nunc in orci dapibus, vel tincidunt odio
        blandit. Quisque dignissim augue ac suscipit varius. Nulla at
        imperdiet purus, sed vestibulum purus.
      </p>

      <h3>Service 1</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        gravida purus quis lacinia. Duis pharetra, tortor sit amet cursus
        suscipit, ante ligula consequat odio, et sodales lectus nisl a dui.
        Sed ultricies est non vulputate.
      </p>

      <h3>Service 2</h3>
      <p>
        Sed fringilla nunc vel ultricies feugiat. Nullam varius, quam eu
        malesuada efficitur, sapien neque finibus tortor, eu luctus lectus
        metus vel ex. Phasellus non posuere mi.
      </p>

      <h2>Contact Us</h2>
      <p>
     {`If you have any questions or need further information, please don't
        hesitate to contact us. We're here to help!`}
      </p> */}
          </Container>
    </div>
  );
};

export default Content;
