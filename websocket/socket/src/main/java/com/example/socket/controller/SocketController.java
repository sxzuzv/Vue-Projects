package com.example.socket.controller;

import com.example.socket.vo.SocketVO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
@Slf4j
public class SocketController {
    @MessageMapping("/receive")
    @SendTo("/send")
    public SocketVO SocketHandler(SocketVO socketVO) {
        String userName = socketVO.getUserName();
        String content = socketVO.getContent();
        Object canvasObj = socketVO.getCanvasObj();

        SocketVO result = new SocketVO(userName, content, canvasObj);

        return result;
    }
}