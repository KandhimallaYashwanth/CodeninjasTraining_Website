export const getHomePage = (req, res) => {
  try {
    const data = {
      title: 'CodeNinjas Training - Transform Your Career',
       description: 'Join CodeNinjas Training to master cutting-edge technologies with industry experts. Get job-ready skills, hands-on experience, and placement assistance.'
    };
    // The 'index' string refers to 'index.ejs' in the views folder
    res.render('index', data);
  } catch (error) {
    console.error('Error rendering homepage:', error);
    res.status(500).send('Error loading the page.');
  }
};

export const getAboutPage = (req, res) => {
  try {
    const data = {
      title: 'About Us - CodeNinjas Training',
      description: 'Learn more about CodeNinjas Training, our mission to bridge the gap between academia and industry, and our commitment to student success.'
    };
    // The 'about' string refers to 'about.ejs' in the views folder
    res.render('about', data);
  } catch (error) {
    console.error('Error rendering about page:', error);
    res.status(500).send('Error loading the page.');
  }
};

export const getContactPage = (req, res) => {
  try {
    const data = {
      title: 'Contact Us - CodeNinjas Training',
      description: 'Get in touch with CodeNinjas Training. Find our address, contact number, email, and social media links, or fill out our form for course inquiries and support.',
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_ANON_KEY
    };
    // The 'contact' string refers to 'contact.ejs' in the views folder
    res.render('contact', data);
  } catch (error) {
    console.error('Error rendering contact page:', error);
    res.status(500).send('Error loading the page.');
  }
};
