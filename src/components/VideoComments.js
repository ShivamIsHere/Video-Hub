import React from 'react';

const commentsData=[
  {
    name:"Shivam",
    text:"lorem ipsum dolor sit amet, consectetur adip",
    replies:[]
  }, 
  {
    name:"Shivam",
    text:"lorem ipsum dolor sit amet, consectetur adip",
    replies:[{
      name:"Shivam",
      text:"lorem ipsum dolor sit amet, consectetur adip",
      replies:[{
        name:"Shivam",
        text:"lorem ipsum dolor sit amet, consectetur adip",
        replies:[{
          name:"Shivam",
          text:"lorem ipsum dolor sit amet, consectetur adip",
          replies:[]
        },{
          name:"Shivam",
          text:"lorem ipsum dolor sit amet, consectetur adip",
          replies:[]
        }, {
          name:"Shivam",
          text:"lorem ipsum dolor sit amet, consectetur adip",
          replies:[]
        },  ],
      }, ],
    }, ],
  },
  {
    name:"Shivam",
    text:"lorem ipsum dolor sit amet, consectetur adip",
    replies:[]
  }, {
    name:"Shivam",
    text:"lorem ipsum dolor sit amet, consectetur adip",
    replies:[]
  }, {
    name:"Shivam",
    text:"lorem ipsum dolor sit amet, consectetur adip",
    replies:[]
  }, 
  {
    name:"Shivam",
    text:"lorem ipsum dolor sit amet, consectetur adip",
    replies:[{
      name:"Shivam",
      text:"lorem ipsum dolor sit amet, consectetur adip",
      replies:[{
        name:"Shivam",
        text:"lorem ipsum dolor sit amet, consectetur adip",
        replies:[{
          name:"Shivam",
          text:"lorem ipsum dolor sit amet, consectetur adip",
          replies:[{
            name:"Shivam",
            text:"lorem ipsum dolor sit amet, consectetur adip",
            replies:[{
              name:"Shivam",
              text:"lorem ipsum dolor sit amet, consectetur adip",
              replies:[{
                name:"Shivam",
                text:"lorem ipsum dolor sit amet, consectetur adip",
                replies:[{
                  name:"Shivam",
                  text:"lorem ipsum dolor sit amet, consectetur adip",
                  replies:[]
                }, ],
              }, ],
            }, ],
          },],
        }, ],
      }, ],
    }, ],
  },
  {
    name:"Shivam",
    text:"lorem ipsum dolor sit amet, consectetur adip",
    replies:[]
  }, {
    name:"Shivam",
    text:"lorem ipsum dolor sit amet, consectetur adip",
    replies:[]
  }, 
  {
    name:"Shivam",
    text:"lorem ipsum dolor sit amet, consectetur adip",
    replies:[{
      name:"Shivam",
      text:"lorem ipsum dolor sit amet, consectetur adip",
      replies:[{
        name:"Shivam",
        text:"lorem ipsum dolor sit amet, consectetur adip",
        replies:[{
          name:"Shivam",
          text:"lorem ipsum dolor sit amet, consectetur adip",
          replies:[{
            name:"Shivam",
            text:"lorem ipsum dolor sit amet, consectetur adip",
            replies:[]
          }, ],
        }, ],
      }, ],
    },],
  }, 
]
const Comment =({data})=>{
  const {name,text}=data;
  return <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
    <img  className = "w-8 h-8" alt="user" src="https://cdn0.iconfinder.com/data/icons/education-2-27/32/user_staff_person_man_profile_boss_circle-512.png"/>
  <div className="px-3">
    <p className='font-bold'>{name}</p>
    <p>{text}</p>
  </div>
  </div>
  
};

const CommentsList=({comments})=>{
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment}/>
      <div className='pl-5 border-l-black ml-5'>
        <CommentsList comments={comment.replies}/>
      </div>
    </div>
  ));
};


const VideoComments = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
    <CommentsList comments={commentsData}/>
    </div>
  )
}

export default VideoComments;