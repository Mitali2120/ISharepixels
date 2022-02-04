export default{
    name: 'pixel',
    title: 'Pixel',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'about',
            title: 'About',
            type: 'string',
        },
        {
            name: 'destination',
            title: 'Destination',
            type: 'url',
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'userId',
            title: 'UserID',
            type: 'string',
        },
        {
            name: 'postedBy',
            title: 'PostedBy',
            type: 'postedBy',
        },
        {
            name: 'save',
            title: 'Save',
            type: 'array',
            of: [{ type: 'save'}] 
            // we'll create new schema for the doc save
        },
        {
            name: 'comments',
            title: 'Comments',
            type: 'array',
            of: [{ type: 'comment'}]
            // we'll create new schema for the doc comment
        },
    ]
}