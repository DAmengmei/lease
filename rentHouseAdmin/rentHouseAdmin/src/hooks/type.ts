/**
 * 处理数据的工具命名空间
 * 提供了一组工具和类型定义，用于处理和管理数据
 */
export namespace HandleData {
  /**
   * 消息类型枚举
   * 用于定义消息的不同类型，以便在用户界面或其他组件中使用
   * 
   * @enum {MessageType}
   * @property {string} '' - 空消息类型，用于表示没有特定消息
   * @property {string} 'success' - 成功消息类型，表示操作成功完成
   * @property {string} 'warning' - 警告消息类型，表示操作中出现了一些问题，但不是错误
   * @property {string} 'info' - 信息消息类型，表示一般信息或提示
   * @property {string} 'error' - 错误消息类型，表示操作中出现了错误
   */
  export type MessageType = '' | 'success' | 'warning' | 'info' | 'error'
}
