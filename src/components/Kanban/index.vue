<template>
  <div class="board-column">
    <div class="board-column-header">
      {{headerText}}
    </div>
    <draggable
      class="board-column-content"
     >
      <div class="left">
        <slot name="left"></slot>
      </div>
      <div class="right">
        <h3>示列演示</h3>
        <slot name="right"></slot>
      </div>
    </draggable>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
const draggable = require('vuedraggable')

@Component({
    components: {
        draggable
    }
})
export default class Kanban extends Vue {
    @Prop({ default: 'Header' }) headerText: string

    from = 'parent'
}
</script>
<style lang="scss">
.board-column {
  min-width: 300px;
  min-height: 100px;
  height: auto;
  overflow: hidden;
  background: #f0f0f0;
  border-radius: 3px;

  .board-column-header {
    height: 50px;
    line-height: 50px;
    overflow: hidden;
    padding: 0 20px;
    text-align: center;
    background: #333;
    color: #fff;
    border-radius: 3px 3px 0 0;
  }

  .board-column-content {
    height: auto;
    overflow: hidden;
    border: 10px solid transparent;
    min-height: 60px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    padding: 15px;
    .board-item {
      cursor: pointer;
      width: 100%;
      height: 64px;
      margin: 5px 0;
      background-color: #fff;
      text-align: left;
      line-height: 54px;
      padding: 5px 10px;
      box-sizing: border-box;
      box-shadow: 0px 1px 3px 0 rgba(0,0,0,0.2);
    }
    .left{
      width: 49%;
    }
    .right{
      width: 49%;
      text-align: center;
    }
    h3 {
      margin-bottom: 40px;
    }
  }
}

.kanban {
  margin-bottom: 30px;
  &.todo {
    .board-column-header {
      background: #4A9FF9;
    }
  }
  &.working {
    .board-column-header {
      background: #f9944a;
    }
  }
  &.done {
    .board-column-header {
      background: #2ac06d;
    }
  }
}
</style>

