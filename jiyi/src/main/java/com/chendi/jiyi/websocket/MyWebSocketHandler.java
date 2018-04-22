package com.chendi.jiyi.websocket;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.WebSocketMessage;
import org.springframework.web.socket.WebSocketSession;

import com.chendi.jiyi.entity.Letter;
import com.chendi.jiyi.entity.PersonalLetter;
import com.chendi.jiyi.service.PersonalLetterService;

@Component
public class MyWebSocketHandler implements WebSocketHandler {

	@Autowired
	private PersonalLetterService plService;

	// 当MyWebSocketHandler类被加载时就会创建该Map，随类而生
	public static final Map<String, WebSocketSession> userSocketSessionMap;

	static {
		// map的容量是否需要初始化？
		userSocketSessionMap = new HashMap<String, WebSocketSession>();
	}
	
	/**
	 * 在此刷新页面就相当于断开WebSocket连接,原本在静态变量userSocketSessionMap中的
	 * WebSocketSession会变成关闭状态(close)，但是刷新后的第二次连接服务器创建的
	 * 新WebSocketSession(open状态)又不会加入到userSocketSessionMap中,所以这样就无法发送消息
	 * 因此应当在关闭连接这个切面增加去除userSocketSessionMap中当前处于close状态的WebSocketSession，
	 * 让新创建的WebSocketSession(open状态)可以加入到userSocketSessionMap中
	 */
	@Override
	public void afterConnectionClosed(WebSocketSession webSocketSession, CloseStatus arg1) throws Exception {
		String id=(String) webSocketSession.getAttributes().get("id");
		System.out.println("用户id："+id+"离开map");
		userSocketSessionMap.remove(id);
//		Iterator<Map.Entry<String, WebSocketSession>> iterator = userSocketSessionMap.entrySet().iterator();
//		while (iterator.hasNext()) {
//			Map.Entry<String, WebSocketSession> entry = iterator.next();
//			if (entry.getValue().getAttributes().get("id").equals(webSocketSession.getAttributes().get("id"))) {
//				userSocketSessionMap.remove(webSocketSession.getAttributes().get("uid"));
//				System.out.println("WebSocket in staticMap:" + webSocketSession.getAttributes().get("id") + "removed");
//			}
//		}
	}

	// 握手实现连接后
	@Override
	public void afterConnectionEstablished(WebSocketSession webSocketSession) throws Exception {
		String id = (String) webSocketSession.getAttributes().get("id");
//		if (userSocketSessionMap.get(id) == null) {
//			userSocketSessionMap.put(id, webSocketSession);
//		}
		System.out.println("用户id："+id+"进入map");
		userSocketSessionMap.put(id,webSocketSession);
	}

	// 发送信息前的处理
	@Override
	public void handleMessage(WebSocketSession webSocketSession, WebSocketMessage<?> webSocketMessage)
			throws Exception {
		// TODO Auto-generated method stub
		if (webSocketMessage.getPayloadLength() == 0)
			return;
//		String receiver = webSocketMessage.getPayload().toString();
		String receiver = "1409030239";
		// 得到Socket通道中的数据并转化为Message对象
		// Message msg=new
		// Gson().fromJson(webSocketMessage.getPayload().toString(),Message.class);
		// msg.setMessageDate(now);
		// 将信息保存至数据库
		// youandmeService.addMessage(msg.getFromId(),msg.getFromName(),msg.getToId(),msg.getMessageText(),msg.getMessageDate());

		// 发送Socket信息
		// sendMessageToUser(msg.getToId(), new TextMessage(new
		// GsonBuilder().setDateFormat("yyyy-MM-dd
		// HH:mm:ss").create().toJson(msg)));
		WebSocketSession session = userSocketSessionMap.get(receiver);
		List<PersonalLetter> list = plService.queryByReceiverId(receiver, 0);
		if (session != null && session.isOpen()) {
			session.sendMessage(new TextMessage(String.valueOf(list.size())));
		}
	}

	@Override
	public void handleTransportError(WebSocketSession arg0, Throwable arg1) throws Exception {
		// TODO Auto-generated method stub

	}

	@Override
	public boolean supportsPartialMessages() {
		// TODO Auto-generated method stub
		return false;
	}

}
