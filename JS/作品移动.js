
window.onload = function ()
{
	var aLi = document.getElementsByTagName("li");
	var oBig = document.getElementById("bigPro");
	var oLoading = oBig.getElementsByTagName("div")[0];
	var i = 0;
	
	for (i = 0; i < aLi.length; i++)
	{
		aLi[i].index = i;
		//��껮��, Ԥ����ͼƬ������������ʾ
		aLi[i].onmouseover = function ()
		{
			var oImg = document.createElement("img");
			//ͼƬԤ����
			var img = new Image();			
			img.src = oImg.src = aLi[this.index].getElementsByTagName("img")[0].src.replace(".jpg","_big.jpg");
			//�����ͼƬ
			oBig.appendChild(oImg);
			//����ƹ���ʽ
			this.className = "active";
			//��ʾbig
			oBig.style.display = oLoading.style.display = "block";
			//�жϴ�ͼ�Ƿ���سɹ�
			img.complete ? oLoading.style.display = "none" : (oImg.onload = function() {oLoading.style.display = "none";})		
		};
		//����ƶ�, ��ͼ������������ƶ�
		aLi[i].onmousemove = function (event)
		{
			var event = event || window.event;	
			var iWidth = document.documentElement.offsetWidth - event.clientX;	
			//����big��topֵ
			oBig.style.top = event.clientY + 20 + "px";
			//����big��leftֵ, ����Ҳ���ʾ���򲻹�, ��ͼ������������ʾ.
			oBig.style.left = (iWidth < oBig.offsetWidth + 10 ? event.clientX - oBig.offsetWidth - 10 : event.clientX + 10) + "px";
			
		};
		//����뿪, ɾ����ͼ�����ش�ͼ����
		aLi[i].onmouseout = function ()
		{
			this.className = "";
			oBig.style.display = "none";
			//�Ƴ���ͼƬ
			oBig.removeChild(oBig.lastChild)
		}
	}
};
