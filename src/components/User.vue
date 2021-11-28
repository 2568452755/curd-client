<template>
  <div>
    用户
    <button @click="getUser">获取所有用户</button>
    <ul>
      <li v-for="user in users">
        <ul>
          <li v-for="item in user">{{ item }}</li>
        </ul>
      </li>
    </ul>
    <!-- 添加 -->
    <form @submit.prevent="addUser">
      <label> 姓名: <input type="text" v-model="adduser.addname" /></label>
      <label> 年龄: <input type="text" v-model="adduser.addage" /></label>
      <label> 性别: <input type="text" v-model="adduser.addsex" /></label>
      <input type="submit" value="提交" />
    </form>
    <!-- 删除 -->
    <ul>
      <li v-for="user in users">
        <ul>
          <li v-for="item in user">{{ item }}</li>
        </ul>
        <button @click="deluser(user.id)">删除</button>
      </li>
    </ul>
    <!-- 修改 -->
    <ul>
      <li v-for="(user, index) in users">
        <ul>
          <li v-for="item in user">{{ item }}</li>
        </ul>

        <button @click="upwindowshow(user, index)">修改</button>
        <div :class="{ box: currentindex != index }">
          <form @submit.prevent="upUser(upuser)">
            <label>
              姓名:
              <input type="text" v-model="upuser.upname" />
            </label>
            <label>
              年龄:
              <input type="text" v-model="upuser.upage" />
            </label>
            <label>
              性别:
              <input type="text" v-model="upuser.upsex" />
            </label>
            <input type="submit" value="确认" />
          </form>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { getUser, addUser, delUser ,upUser} from "@/network/user.js";

export default {
  name: "User",
  data() {
    return {
      // 获取所有用户
      users: null,
      // 添加用户
      adduser: {
        addsex: "",
        addname: "",
        addage: "",
      },
      // 是否修改显示
      currentindex: -1,
      isshowupwindow: true,
      // 修改的用户
      upuser: {
        upid: "",
        upsex: "",
        upname: "",
        upage: "",
      },
    };
  },
  // mounted() {
  //   this.getUser();
  // },
  methods: {
    // 请求所有用户
    getUser() {
      getUser().then((res) => {
        this.users = res.data.list;
      });
    },
    // 添加用户
    addUser() {
      addUser(this.adduser).then((res) => {
        console.log(res);
      });
    },
    // 删除用户
    deluser(delid) {
      delUser(delid).then((res) => {
        console.log(res);
        // 删除后重新请求数据
        this.getUser();
      });
    },
    // 修改
    upwindowshow(user, index) {
      this.currentindex = index;
      this.upuser.upname = user.name;
      this.upuser.upage = user.age;
      this.upuser.upsex = user.sex;
      this.upuser.upid = user.id;
      
    },
    upUser(upuser) {   
      upUser(upuser).then((res)=>{
        console.log(res);
        // 修改后重新请求数据
        this.getUser();
      })
    },
  },
};
</script>

<style  scoped>
.box {
  display: none;
}
</style>
