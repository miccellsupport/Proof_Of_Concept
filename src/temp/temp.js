    //hosting
    var _baseUrl = 'http://192.168.1.25/';
    var _vueUrl = '//192.168.1.25/application/modules/erp_barcode/views/';
    var _sessionData = '{"__ci_last_regenerate":1647311894,"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImJiZmJiZjY1LWFmOWUtNDBkNC1hZjg4LWM1MjA1MWQ0ODA0NCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiNTkyMDIiLCJuYmYiOjE2NDczMTA2NTcsImV4cCI6MTY0NzQ4MzQ1N30.TCow1yZD2jaTJHzH0hI9sSa1M2atISu5X3YRy3bdDPY","username":"59202","org_code":"MC"}';
        _sessionData = ( JSON.parse(_sessionData) ) ? JSON.parse(_sessionData) : {} ;

    var _picking_id = '442';

    //plugin findIndex
    function findIndexAttr(array, attr, value) {
        console.log(attr,value)
        for(var i = 0; i < array.length; i += 1) {
            if(array[i][attr[0]] === value[0] && array[i][attr[1]] === value[1] || array[i][attr[2]] === value[1]){
                return i;
            }
        }
        return -1;
    }

    function moveArrayItemToNewIndex(arr, old_index, new_index) {
        if (new_index >= arr.length) {
            var k = new_index - arr.length + 1;
            while (k--) {
                arr.push(undefined);
            }
        }
        arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
        return arr; 
    };

    function isTouchDevice() {  
        try {  
            document.createEvent("TouchEvent");  
            return true;  
        } catch (e) {  
            return false;  
        }  
    }

    //plugin findIndex
    function scan_barcode(array, attr, value) {
        for(var i = 0; i < array.length; i += 1) {
            if(array[i][attr] === value) {
                return i;
            }
        }
        return -1;
    }



    const delay = async (ms) => new Promise(res => setTimeout(res, ms));

    Vue.component('loading-component', httpVueLoader(_vueUrl+'components/common/loading-component.vue'))
    Vue.component('navbar-handheld-component', httpVueLoader(_vueUrl+'components/navbar-handheld-component.vue'))
    Vue.component('bracode-modal-component', httpVueLoader(_vueUrl+'components/common/bracode-modal-component.vue'))

    const app = new Vue({
        el: '#app',
        components: {
            //
        },
        data() {
            return {
                 myToggle: false,
                 dismissSecs: 1,
                dismissCountDown: 0,
                state:null,
                getBarcode:'',
                // 
                fields_dt : [
                        { key: 'item_name',label: 'ชื่อสินค้า',sortable: true},
                        { key: 'picking_barcode',label: 'barcode', sortable: true },
                        { key: 'request_qty',label: 'จำนวน', sortable: true },
                        { key: 'product_unit', label: 'หน่วย', sortable: true },
                        { key: 'product_lot',label: 'lot', sortable: true },
                        { key: 'picking_serial_number',label: 'serial', sortable: true },
                    ],
                isLoading:true,
                items:[],
                scanBarcode: {
                    text:'',
                    state:null
                },
                info:{},
                actionForm:{
                    method:'GET',
                    url:'',
                    data:{}
                }
            }
        },
        methods: {
            async window_location(popup){
                 url = _baseUrl+'erp_barcode/handheld/picking/picking_list?pickingtype='+this.items.picking_type;
                if (popup == 'success') {
                        swal({
                            title: "",
                            text: "เรียบร้อย",
                            type: "success",
                            timer: 1000,
                            showConfirmButton: false
                        }, function(){
                            window.location.href = url;
                        });
                }else if(popup == 'error') {
                        swal({
                            title: "",
                            text: "ยกเลิกใบงาน",
                            type: "error",
                            timer: 1000,
                            showConfirmButton: false
                        }, function(){
                            window.location.href = url;
                        });
                }else if(popup == 'furlough') {
                        swal({
                            title: "",
                            text: "พักใบงาน",
                            type: "warning",
                            timer: 1000,
                            showConfirmButton: false
                        }, function(){
                            window.location.href = url;
                        });
                }else if(popup == 'errormessage') {
                        swal({
                            title: "",
                            text: "ใบงานนี้ปิดไปแล้ว",
                            type: "warning",
                            timer: 2000,
                            showConfirmButton: false
                        }, function(){
                            window.location.href = url;
                        });
                }else if(popup == 'nobarcode') {
                        swal({
                            title: this.scanBarcode.text,
                            text: '<h4>ไม่มีบาร์โค้ดนี้ในใบงาน</h4>'+"<audio hidden id='nobarcode' controls autoplay='autoplay'>" + '<source src="http://192.168.1.25/mp3/nobarcode.mp3" type="audio/mpeg">' + "</audio>",
                            type: "warning",
                            timer: 2000,
                            showConfirmButton: false,
                            html: true
                        }, 
                            function(){
                                document.getElementById('nobarcode').pause();
                                swal.close();
                            }
                        );
                }
                    // this.jobList()
                    this.$forceUpdate()
            },
            async getRm(barcode) {
              this.getBarcode = barcode
              //true : false
               let index = scan_barcode(this.items.dt,'item_code',barcode)
               if (index >= 0) {
                this.state = true;
                this.getBarcode = '';
               }else{
                this.state = false;
                this.getBarcode = '';
               }

               // console.log(index)
               if (index >= 0) {
                    // console.log(this.items.dt[index])
                    if ( !this.items.dt[index].actual_qty ) {
                        this.items.dt[index].actual_qty = 1
                    }
                    else {
                        this.items.dt[index].actual_qty = (this.items.dt[index].actual_qty+1)
                    }
               }
            },

            async getBarcodes(code,picking_id_dt) {
                
                let barcode = this.scanBarcode.text;
                let picking_id = '';

                if (code === '') {
                    let barcode = code;
                    let picking_id = picking_id_dt;
                }

                let id = this.items['id'];

                let json = JSON.stringify({
                    "barcode": (barcode) ? barcode : code,
                    "id": (id) ? id : '',
                    "picking_id":(picking_id) ? picking_id : picking_id_dt 
                })
                // console.log('json55',json)
                const res = await axios.post(_baseUrl+'erp_barcode1/backend/picking/select_product', json , {
                    'Content-Type': 'application/json' 
                }).then( (res) => {
                    return ( res.data ) ? res.data : res.error
                }).catch( (err) => {
                    return false
                })
                // console.log('เทสยิงนับ2เครื่อง',res);
                // return
                if (res) {
                    this.scanBarcode.state = false
                    let index = scan_barcode(this.items.dt,'id',res.data.items.id)
                    // console.log('เทสสแกน',index);
                    if (index >= 0) {
                        this.scanBarcode.state = true
                        // console.log('เทสยิง',res);
                    }else {
                        this.scanBarcode.state = false
                        // console.log('จำนวนสินค้าเกินที่กำหนดแล้ว',this.items.dt[index]);
                        this.window_location('nobarcode')
                    }

                    for (var i = 0; i < this.items.dt.length; i++) {
                        if (this.items.dt[i]['id'] == res.data.items.id) {
                            if (index >= 0) {
                                if ( !this.items.dt[index].product_logs_qty ) {
                                    this.items.dt[index].product_logs_qty = 1
                                }
                                else {
                                    this.items.dt[index].product_logs_qty = (parseFloat(res.data.items.data[0].product_logs_qty) + parseFloat(1))
                                } 
                                    this.goto(this.items.dt[index]['id'])    
                            }else{
                                    console.log('จำนวนไอดีที่ต้องติดลบ',0);
                                    this.scanBarcode.state = false
                            }

                            if (res.data.items.picking_barcode != '') {
                                    console.log('บาร์โค้ดถูก',res.data.items.picking_barcode);
                            }else{
                                    console.log('บาร์โค้ดผิด',res.data.items.picking_barcode);
                                    this.scanBarcode.state = false
                                    this.window_location('nobarcode')
                            }

                        }else{ 
                          // console.log('เช็คไอดีแถวว่าตรงหรือเปล่า',0)
                        }
                        this.$forceUpdate()
                        this.scanBarcode.text = ''
                    } 
                    // if (index > 0) {
                        this.job(_picking_id,index);
                        // moveArrayItemToNewIndex(this.items.dt, index, 0);
                    // }
                   
                }
                
            },

            async job(row,index='') {
                let json = JSON.stringify({
                    "picking_id": (row) ? row : ''
                })
             // console.log('job row: ',row)
                // const res = await axios.post(_baseUrl+'erp_barcode/backend/sbm/get_all', json , {
                const res = await axios.post(_baseUrl+'erp_barcode/backend/picking/get_hds', json , {
                    'Content-Type': 'application/json' 
                }).then( (res) => {
                  // console.log('test',res);
                    return ( res.data ) ? res.data : res.error
                }).catch( (err) => {
                    return false
                })

                if (res) {
                    // console.log('job ready: ',res)
                    // let dt = res.data.items.dt
                    // Object.entries(res.data.items.dt).forEach(([key, row]) => {
                    Object.entries(res).forEach(([key, row]) => {
                        // console.log('data_dt: ',res)
                        //row.aqu_qty = row.request_qty
                        let req_qty = row.request_qty - ( row.request_qty- row.rema_qty)
                        if(req_qty <= 0 ) {
                            res.data.items.dt.splice(key, 1)
                        }
                        else{
                            row.request_qty = req_qty
                        }
                    })

                    this.items = res.data.items || []
                    this.$forceUpdate()
                    this.isLoading = false
                     if (index != '') {
                        moveArrayItemToNewIndex(this.items.dt, index, 0);
                    }
                }   
            },
             openInfo(row) {
                // console.log(row)
                // this.info = row
                this.jobDt(row)
            },
             async jobDt(row) { 

                this.info = row

                // console.log('row',row)
                // const res = await axios.post(_baseUrl+'erp_barcode/backend/sbm/get_dt', json , {
                // const res = await axios.post(_baseUrl+'erp_barcode/backend/picking/get_dt', json , {
                //     'Content-Type': 'application/json' 
                // }).then( (res) => {
                //     return ( res.data ) ? res.data : res.error
                // }).catch( (err) => {
                //     return false
                // })

                // if (res) {

                //     let dt = res.data.items || []
                //     let index = findIndexAttr(this.items,'docu_no',row.docu_no)
                  
                    
                //     console.log(index)
                //       Object.entries(dt).forEach(([key, row]) => {
                        
                //         //row.aqu_qty = row.request_qty
                //         let req_qty = row.request_qty - ( row.request_qty- row.rema_qty)
                //         if(req_qty <= 0 ) {
                //             dt.splice(key, 1)
                //         }
                //         else{
                //             row.request_qty = req_qty
                //         }
                //     })

                //     this.items[index]["dt"] = dt
                //     // console.log(res.data.items)
                    // this.info = this.items[index]
                //      console.log(this.info)
                    this.$bvModal.show('bracode-modal')
                    this.$forceUpdate()
                // }   
            },
            async create(code) {

                // console.log('code',code)
            },
            eventBarcodeEnter() {
               //  let index = findIndexAttr(this.items.dt,'item_code',this.scanBarcode.text)
               //  if (index >= 0) {
               //      // console.log(index,this.items.dt[index])
               //      if ( !this.items.dt[index].actual_qty ) {
               //          this.items.dt[index].actual_qty = 1
               //      }
               //      else {
               //          this.items.dt[index].actual_qty = (this.items.dt[index].actual_qty+1)
               //      }
               //      this.scanBarcode.state = true 
               // }else{
               //   this.scanBarcode.state = false
               // }
               // this.$forceUpdate()

               //  setTimeout(() => { this.scanBarcode.text = '' }, 500)


               //  this.scanBarcode.text = ''
               //  this.scanBarcode.state = true
            },
            async confirm() {

                let json = JSON.stringify(this.items)
                 // console.log(json)
                 // return
                 this.myToggle = true
                // const res = await axios.post(_baseUrl+'erp_barcode/backend/pms/create', json , {
                const res = await axios.post(_baseUrl+'erp_barcode/backend/picking/save_update', json , {
                    'Content-Type': 'application/json' 
                }).then( (res) => {
                    return ( res.data ) ? res.data : res.error
                }).catch( (err) => {
                    return false
                })
                console.log('confirm',res)
                // return
                if (res) {
                    // console.log('message',res)
                    if (res.data.items.status_h == '0') {
                        this.window_location('errormessage')
                        this.myToggle = false
                        this.$forceUpdate()
                    }else{
                        this.window_location('success')
                        this.myToggle = false
                        this.$forceUpdate()
                    }
                    
                }else{
                    this.myToggle = false
                    this.$forceUpdate()
                }
                
            },
            async stop() {
                let json = JSON.stringify(this.items)
                 this.myToggle = true
                // const res = await axios.post(_baseUrl+'erp_barcode/backend/pms/create', json , {
                const res = await axios.post(_baseUrl+'erp_barcode/backend/picking/stop_update', json , {
                    'Content-Type': 'application/json' 
                }).then( (res) => {
                    
                    return ( res.data ) ? res.data : res.error
                }).catch( (err) => {
                    return false
                })

                // console.log(json)
                 if (res) {
                        this.window_location('furlough')
                        this.myToggle = false
                        this.$forceUpdate()
                }else{

                    this.myToggle = false
                    this.$forceUpdate()
                }
                
            },
            async cancel() {

                let json = JSON.stringify(this.items)
                 // console.log(json)
                 this.myToggle = true
                // const res = await axios.post(_baseUrl+'erp_barcode/backend/pms/create', json , {
                const res = await axios.post(_baseUrl+'erp_barcode/backend/picking/cancel_update', json , {
                    'Content-Type': 'application/json' 
                }).then( (res) => {
                    // console.log(res)
                    return ( res.data ) ? res.data : res.error
                }).catch( (err) => {
                    return false
                })
                // console.log(json)
                 if (res) {
                     console.log('ยกเลิกใบงาน',res)
                        // this.window_location('error')
                        this.myToggle = false
                        this.$forceUpdate()
                }else{

                    this.myToggle = false
                    this.$forceUpdate()
                }
                
            },
             countDownChanged(dismissCountDown) {
                this.dismissCountDown = dismissCountDown
            },
              resetInfo() {
                this.info = {}
            },
            async setFocus() {
                if( isTouchDevice() ){
                    window.scrollTo({top: 300, behavior: 'smooth',});
                }
            },
            goto(refName) {
                console.log('goto',refName);
              var element = this.$refs[refName];
              var top = element.offsetTop;
              console.log('scrollTo',refName,element,top)
              window.scrollTo(0, top);
          }
        },
        mounted: function() {
          console.log(_picking_id);
            setTimeout(() => {
                this.isLoading = false
                this.job(_picking_id)
            }, 1000)


            // const array_data = [
            // ['', 1],
            // ['LOT002', 1],
            // ['LOT001', 1],
            // ['LOT001', 1],
            // ];

            // const result = array_data.reduce((acc, [key, value]) => {
            //   if (acc[key]) {
            //         acc[key][1] += value;
            //     } else {
            //         acc[key] = [key, 1];
            //     }
            //     return acc;
            // }, {});
            // let dd = Object.values(result);
            // console.log(dd[2][0]+'('+dd[2][1]+')');

        },
        watch: {

        }
    })
