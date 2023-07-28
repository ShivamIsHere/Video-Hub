import React from 'react';

const VideoDescription = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-[1120px] pl-5" >
      <h2 className="text-2xl font-semibold mb-2">Video Title</h2>
      <p className="text-gray-600 mb-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a tellus sit amet elit condimentum euismod sit amet in ex. Aenean vehicula euismod facilisis. Sed ultrices nunc eu urna rhoncus, eget accumsan elit blandit. Sed gravida urna in enim rhoncus tempus. Integer non facilisis dolor, a viverra nisi. Vivamus feugiat nibh quis odio laoreet scelerisque. Fusce quis nulla a urna mattis posuere. In hac habitasse platea dictumst. Fusce aliquam ligula nec eros volutpat lacinia. Quisque facilisis nec justo quis bibendum. Donec et turpis eu felis pharetra vehicula. Proin ut felis lacinia, posuere felis ac, maximus lorem.
<br></br>
<br></br>
Vestibulum faucibus tortor vitae nisl consectetur, ac hendrerit elit tincidunt. Sed nec urna nec massa euismod elementum eu a ipsum. Fusce interdum, orci et luctus aliquet, mauris justo mollis ex, vitae iaculis felis purus at justo. Nullam at justo non elit sollicitudin venenatis a nec quam. Duis faucibus varius posuere. Cras a dolor consectetur, scelerisque ligula id, luctus velit. Vivamus in sagittis mauris. In venenatis magna vel elementum fermentum. Suspendisse luctus, nisl id ultrices euismod, justo orci lacinia metus, a euismod orci enim vitae velit. Praesent efficitur luctus erat, eu volutpat nisi tempus sit amet.<br></br><br></br>
Fusce nec dolor consectetur, posuere quam eu, gravida odio. Sed vitae venenatis nibh, vel feugiat neque. Vivamus semper lacinia ipsum, eget congue felis varius ac. Ut ac lacus eu nisl laoreet malesuada quis ac nunc. Nullam bibendum elit id felis iaculis, a varius elit posuere. Integer eu odio nec neque fringilla vehicula. Sed scelerisque, metus eget fermentum mattis, quam neque ullamcorper ipsum, id posuere lorem elit quis elit. Integer ut magna vel eros suscipit posuere.
</p>
      <div className="border-t border-gray-300 pt-4">
        <h3 className="text-lg font-semibold mb-2">Video Details</h3>
        <ul className="list-disc list-inside">
          <li>Published on July 28, 2023</li>
          <li>Duration: 10 minutes</li>
          <li>Views: 1,234,567</li>
          <li>Likes: 12,345</li>
          <li>Dislikes: 567</li>
          <li>Category: Entertainment</li>
        </ul>
      </div>
    </div>
  );
};

export default VideoDescription;
