<template>
    <div class="table_container">
        <el-table
            :data="tableData"
            border
            stripe
            :header-cell-style="{
                'background-color': '#eceff2',
                'color': 'rgb(0, 0, 0)',
                'font-weight': '700',
                'border-bottom': '1px solid #dfe6ec'
            }"
        >
            <el-table-column type="index" label="序号" width="100"></el-table-column>
            <el-table-column prop="date" label="日期" width="140"></el-table-column>
            <el-table-column prop="name" label="姓名" width="120"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
        <Pagination></Pagination>
    </div>
</template>

<script>
export default {
    data() {
        const item = {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
        };
        return {
            tableData: Array(20).fill(item),
            currentPage4: 4
        };
    },
    methods: {}
};
</script>
