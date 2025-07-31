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
