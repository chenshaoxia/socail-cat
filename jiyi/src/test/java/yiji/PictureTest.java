package yiji;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;

import javax.imageio.ImageIO;

import org.junit.Test;

import net.coobird.thumbnailator.Thumbnails;
import net.coobird.thumbnailator.geometry.Positions;

public class PictureTest {
	
	@Test
	public void compress() throws IOException{
//		File file =new File("H:/备份/DCIM/Camera/IMG_20160708_121502_HDR.jpg");
//		String path="H:/备份/DCIM/压缩图片6";
//		//scale图片缩放百分之xx  outputquality输出图片质量压缩为XX
//		//watermark 函数可以为图片添加水印图片。第一个参数是水印的位置；第二个参数是水印图片的缓存数据；第三个参数是透明度。
//		BufferedImage bi=ImageIO.read(new File("H:/备份/UCDownloads/d35e3a7add3edb1b9c.jpg"));
//		Thumbnails.of(file).scale(1f).outputFormat("jpg").outputQuality(0.25f).watermark(Positions.BOTTOM_RIGHT, bi, 0.9f).toFile(path);
		File file =new File("H:/MyEclipse 2016/WorkSpace/.metadata/.me_tcat7/webapps/jiyi/picture/header/girl0.jpg");
		String path="H:/MyEclipse 2016/WorkSpace/.metadata/.me_tcat7/webapps/jiyi/picture/header/girl";
		Thumbnails.of(file).size(300, 200).keepAspectRatio(false).outputFormat("jpg").outputQuality(1f).toFile(path);
	}
}
