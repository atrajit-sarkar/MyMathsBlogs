
const blogs = [
    { title: 'Infinite Dimension Vector Spaces Anomaly', url: 'Blogs\\InfiniteDimensionVectorSpacesAnomaly\\content.html' },

];

const blogList = document.getElementById('blog-list');

blogs.forEach(blog => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.textContent = blog.title;
    link.href = blog.url;
    listItem.appendChild(link);
    blogList.appendChild(listItem);
});