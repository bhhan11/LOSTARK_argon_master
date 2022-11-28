            const cp_input_name = document.querySelector('#showClassName'); //직업명 보여주는 곳을 변수로
            const cp_input_level = document.querySelector('#levelNumber'); //레벨명 쓰는곳을 변수로
            const cp_btn_start = document.querySelector('#startCalculate');//계산시작 확인버튼을 변수로

            const cp_input_weaponNum = document.querySelector('#weaponNum');//1번 무기 평타 횟수 보여주는 곳을 변수로
            const cp_input_basicNum = document.querySelector('#basicNum');//2번 기본 주먹 평타 횟수 보여주는 곳을 변수로
            const cp_input_panNum = document.querySelector('#panNum');//3번 후라이팬 평타 횟수 보여주는 곳을 변수로
            const cp_input_expectTime = document.querySelector('#expectTime');//4번 예상소요시간 보여주는 곳을 변수로
            
            const cp_btn_reset = document.querySelector('#resetBtn');//리셋버튼 구현


            
            

            let key = 0; //직업별 무게값 
            let key2 = 0;
            let key3 = 0;
            let level_key = 0;
            let jobName = null;
            const show_class_func = (j)=>()=>{
                switch(j){
                    case 'shu1':
                        jobName = '디스트로이어';
                        cp_input_name.value = jobName;
                        key = 34; 
                        break;
                    case 'shu2':
                        jobName = '워로드';
                        cp_input_name.value = jobName;
                        key = 34;
                        break;
                    case 'shu3':
                        jobName = '버서커';
                        cp_input_name.value = jobName;
                        key = 34;
                        break;
                    case 'shu4':
                        jobName = '홀리나이트';
                        cp_input_name.value = jobName;
                        key = 34;
                        break;
                    case 'sil1':
                        jobName = '소서리스';
                        cp_input_name.value = jobName;
                        break;
                    case 'sil2':
                        jobName = '아르카나';
                        cp_input_name.value = jobName;
                        break;
                    case 'sil3':
                        jobName = '바드';
                        cp_input_name.value = jobName;
                        break;
                    case 'sil4':
                        jobName = '서머너';
                        cp_input_name.value = jobName;
                        break;
                    case 'arm1':
                        jobName = '리퍼';
                        cp_input_name.value = jobName;
                        break;
                    case 'arm2':
                        jobName = '블레이드';
                        cp_input_name.value = jobName;
                        key2 = -2;
                        break;
                    case 'arm3':
                        jobName = '데모닉';
                        cp_input_name.value = jobName;
                        key3 = -3;
                        break;
                    case 'mu1':
                        jobName = '스트라이커';
                        cp_input_name.value = jobName;
                        break;
                    case 'mu2':
                        jobName = '인파이터';
                        cp_input_name.value = jobName;
                        break;
                    case 'mu3':
                        jobName = '창술사';
                        cp_input_name.value = jobName;
                        break;
                    case 'mu4':
                        jobName = '배틀마스터';
                        cp_input_name.value = jobName;
                        break;
                    case 'mu5':
                        jobName = '기공사';
                        cp_input_name.value = jobName;
                        break;
                    case 'hun1':
                        jobName = '데빌헌터';
                        cp_input_name.value = jobName;
                        break;
                    case 'hun2':
                        jobName = '건슬링어';
                        cp_input_name.value = jobName;
                        break;
                    case 'hun3':
                        jobName = '블래스터';
                        cp_input_name.value = jobName;
                        break;
                    case 'hun4':
                        jobName = '스카우터';
                        cp_input_name.value = jobName;
                        break;
                    case 'hun5':
                        jobName = '호크아이';
                        cp_input_name.value = jobName;
                        break;
                    case 'sp1':
                        jobName = '도화가';
                        cp_input_name.value = jobName;
                        break;
                    case 'sp2':
                        jobName = '기상술사';
                        cp_input_name.value = jobName;
                        break;                                                                            
                }
            };

            // k:레벨 m:슈샤야 아니야?
            function make_weaponNum (k, m) {
                if(k <= 1340 && m != 34){
                    return 10;
                }else if(k > 1340 && k <= 1415 && m != 34) {
                    return 7;
                }else if(k > 1415 && k <= 1490 && m != 34) {
                    return 5;
                }else if(k > 1490 && k <= 1540 && m != 34) {
                    return 4;
                }else if(k > 1540 && k <= 1580 && m != 34) {
                    return 2;
                }else if(k > 1580 && m != 34) {
                    return 1;
                }else if(k > 1340 && k <= 1415 && m === 34) {
                    return 6;
                }else if(k > 1415 && k <= 1445 && m === 34) {
                    return 4;
                }else if(k > 1445 && k <= 1490 && m === 34) {
                    return 2;
                }else if(k > 1490 && m === 34) {
                    return 1;
                }
            }



            //값 산출
            cp_btn_start.addEventListener('click', ()=>{
                const temp = parseInt(cp_input_level.value);

                if(temp >= 1500 && temp <= 1580) {
                    level_key = 1;
                }else if(temp > 1580) {
                    level_key = 2;
                }
                
                cp_input_weaponNum.value = make_weaponNum(temp, key);

                cp_input_basicNum.value = 51 - (key + key2 + key3) + level_key;

                cp_input_panNum.value = 120;

                cp_input_expectTime.value = 2 + '분 이내';
            });
            
            //초기화 버튼
            cp_btn_reset.addEventListener('click', ()=>{
                cp_input_name.value = '';
                cp_input_level.value = null;
                cp_input_weaponNum.value = null;
                cp_input_basicNum.value = null;
                cp_input_panNum.value = null;
                cp_input_expectTime.value = null;
                key = 0;
                key2 = 0;
                key3 = 0;
                level_key = 0;
            });

            document.querySelector('#shu1').addEventListener('click', show_class_func('shu1'));
            document.querySelector('#shu2').addEventListener('click', show_class_func('shu2'));
            document.querySelector('#shu3').addEventListener('click', show_class_func('shu3'));
            document.querySelector('#shu4').addEventListener('click', show_class_func('shu4'));
            document.querySelector('#sil1').addEventListener('click', show_class_func('sil1'));
            document.querySelector('#sil2').addEventListener('click', show_class_func('sil2'));
            document.querySelector('#sil3').addEventListener('click', show_class_func('sil3'));
            document.querySelector('#sil4').addEventListener('click', show_class_func('sil4'));
            document.querySelector('#arm1').addEventListener('click', show_class_func('arm1'));
            document.querySelector('#arm2').addEventListener('click', show_class_func('arm2'));
            document.querySelector('#arm3').addEventListener('click', show_class_func('arm3'));
            document.querySelector('#mu1').addEventListener('click', show_class_func('mu1'));
            document.querySelector('#mu2').addEventListener('click', show_class_func('mu2'));
            document.querySelector('#mu3').addEventListener('click', show_class_func('mu3'));
            document.querySelector('#mu4').addEventListener('click', show_class_func('mu4'));
            document.querySelector('#mu5').addEventListener('click', show_class_func('mu5'));
            document.querySelector('#hun1').addEventListener('click', show_class_func('hun1'));
            document.querySelector('#hun2').addEventListener('click', show_class_func('hun2'));
            document.querySelector('#hun3').addEventListener('click', show_class_func('hun3'));
            document.querySelector('#hun4').addEventListener('click', show_class_func('hun4'));
            document.querySelector('#hun5').addEventListener('click', show_class_func('hun5'));
            document.querySelector('#sp1').addEventListener('click', show_class_func('sp1'));
            document.querySelector('#sp2').addEventListener('click', show_class_func('sp2'));