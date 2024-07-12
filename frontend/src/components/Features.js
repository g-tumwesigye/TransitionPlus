import React from 'react';
import feature1 from '../public/images/image_1.jpg';
import feature2 from '../public/images/image_2.jpg';
import feature3 from '../public/images/image_3.jpg';

function Features() {
  return (
    <div className="container mt-5" id="features">
      <div className="row text-center">
        <div className="col-md-4 feature">
          <img src={feature1} alt="Feature 1" className="img-fluid rounded-circle mb-3" />
          <h3>Personalized Guidance</h3>
          <p>We offer tailored guidance to each student to help them navigate their educational journey effectively.</p>
        </div>
        <div className="col-md-4 feature">
          <img src={feature2} alt="Feature 2" className="img-fluid rounded-circle mb-3" />
          <h3>Mentorship Programs</h3>
          <p>Our mentorship programs connect students with experienced mentors who provide valuable insights and support.</p>
        </div>
        <div className="col-md-4 feature">
          <img src={feature3} alt="Feature 3" className="img-fluid rounded-circle mb-3" />
          <h3>Academic Support</h3>
          <p>We provide a range of academic resources and support to help students excel in their studies.</p>
        </div>
      </div>
    </div>
  );
}

export default Features;

