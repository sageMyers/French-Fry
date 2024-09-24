
<script>
export default 
{
  props: {
    title: String
  },
  setup(props) {
    console.log(props.title)
  }
}

Course [];

try
{
  fetch(courses);

then
(
  data(), 
  {
    return:
    {
      course: {},
      group: {},
      message: "",
      requestDialog: false,
      selectedRequest: {
        CourseNum: "",
        Department:"",
        CourseLevel:"",
        CourseHours:"",
        CourseName: "",
        description: "",
      },
    },
  },
)
}

catch(error)
{};





</script>

<template>
  <div class="about">
    <h1> Course Listings </h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
