<template>
    <div>
        <div class="person-mes">  
            <div class="left-pic"><img src="@/img/mayun.jpg"/></div> 
            <div class="right-mes">
                <ul>
                    <li>姓名</li>
                    <li>性别</li>
                    <li>进入时间</li>
                    <li>离开时间</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // prop:{      
    // }
  
}
</script>
<style scoped>
.person-mes{
    width:230px;
    height: 100px;
    background-color: rgba(0, 0, 255, 0.3);
    border: 2px solid rgba(0, 0, 255, 0.4);
    /* opacity: 0.5; */
}
.left-pic{
    float: left;
    margin: 18px;
}
.right-mes{
    float: right;
    margin: 15px 80px 0 0;
    color: #fff;
}
.right-mes ul{
    list-style: none;
}
</style>

