export const getCoursesPage = (req, res) => {
  try {
    const data = {
      title: 'Our Courses - CodeNinjas Training',
      description: 'Explore our wide range of tech and management courses, designed by industry experts to equip you with the skills for tomorrow\'s challenges.'
    };
    // This renders the 'courses.ejs' file
    res.render('courses', data);
  } catch (error) {
    console.error('Error rendering courses page:', error);
    res.status(500).send('Error loading the page.');
  }
};

export const getDataSciencePage = (req, res) => {
  try {
    const data = {
      title: 'Data Science Using Python Course - CodeNinjas Training',
      description: 'Unlock your potential with our expert-led data science using python program. This comprehensive course covers Python, Pandas, Matplotlib, and Scikit-learn.'
    };
    // This renders the new ejs file
    res.render('tech_courses/data-science', data);
  } catch (error) {
    console.error('Error rendering data science page:', error);
    res.status(500).send('Error loading the page.');
  }
};